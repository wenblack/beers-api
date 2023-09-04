// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {id} = req.query
    const nameConverted = String(id)
    const data = await prisma.beer.findFirst({
       where:{
        id: nameConverted
       },
       select:{
          name:true,
          description:true,
          IBU:true,
          rating:true,
          ABV:true, 
          categorie:true,
          reviews:true
       }
    })
    const average = await prisma.notes.aggregate({
      _avg:{
        note:true
      },
      where:{
        beerId:data?.name
      }
    })
    if(data === null){
        return res.status(404).json({ result: 'Beer Not Found'})
      }
     return res.status(200).json({ data: data, public_note :average._avg })
}
