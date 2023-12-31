// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.user.findMany({
    select:{
      id:true,
      email:true,
      name:true,
    }
  })
  res.status(200).json({ users: data })
}
