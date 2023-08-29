// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/router'

const prisma = new PrismaClient()


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
    
    res.status(200).json({ users: data })
}
