// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.beer.findMany({
    select:{
       id:false,
       name:true,
       description:true,
       IBU:true,
       rating:true,
    }
  })
  if(data.length ===0){
    
    return res.status(404).json({ result: 'Categorie not Found'})
  }
  return res.status(200).json({ result: data })
  
}
