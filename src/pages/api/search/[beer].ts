// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {beer} = req.query
    const nameConverted = String(beer)
    const data = await prisma.beer.findMany({
      where:{
        name:{
          startsWith:nameConverted
        }
      },
      select:{
          id:true,
          name:true,
          IBU:true,
          rating:true,
       }
    })
 
    if(data.length === 0){
        return res.status(404).json({ result: 'Beer Not Found'})
      }
     return res.status(200).json({ total: data.length, result: data })
}
