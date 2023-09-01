// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { categorie } = req.query
  const categorieConverted = String(categorie)
  const data = await prisma.categorie.findMany({
    where: {
      name: categorieConverted
    },
    select: {
      Beer: true,_count:true
    }
  })

  let total = data.length
  if (total === 0) {
    return res.status(404).json({ result: 'Categorie not Found' })
  }
  return res.status(200).json({data: data })

}
