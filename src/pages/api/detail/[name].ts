// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {name} = req.query
    const nameConverted = String(name)
    const data = await prisma.beer.findFirst({
       where:{
        name: nameConverted
       },
       include:{
        reviews:true
       }
    })
    if(data === null){
        return res.status(404).json({ result: 'Beer Not Found'})
      }
     return res.status(200).json({ data: data })
}
