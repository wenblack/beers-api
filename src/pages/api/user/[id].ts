// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const nameConverted = String(id)
  const data = await prisma.user.findFirst({
    where: {
      id: nameConverted
    },
    select: {
      name: true,
      email: true,
      Notes: true,
      Review: true
    }
  })
  if (data === null) {
    return res.status(404).json({ result: 'User Not Found' })
  }
  return res.status(200).json({
    name: data.name,
    email: data.email,
    reviews: data.Review.length,
    notes: data.Notes.length
  })
}
