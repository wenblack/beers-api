// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const nameConverted = String(id)
  const user = await prisma.user.findFirst({
    where: {
      id: nameConverted
    },
    select: {
      id:true,
      name: true,
      email: true,
      Notes: true,
      Review: true
    }
  })

  if(req.method != "DELETE"){
    return res.status(405).json({
      message: `Wrong Method`
     })
  }
  if (user === null) {
    return res.status(404).json({ result: 'User Not Found' })
  }

  const deletedUser = await prisma.user.delete({
    where:{
      id:user.id
    }
  })

  return res.status(200).json({
   message: `user ${deletedUser.email} deleted! `
  })
}
