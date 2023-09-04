// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {user } = req.query
  const {title,content,beerID} = req.body
  const nameConverted = String(user)
  const beerConverted = String(beerID)


  const hasUser = await prisma.user.findUnique({
    where:{
      email:nameConverted
    },
    select:{
      _count:true,
      id:true,
      name:true
    }
  })
  const hasBeer = await prisma.beer.findUnique({
    where:{
      id:beerConverted
    },
    select:{
      _count:true,
      id:true,
      name:true
    }
  })

  if (req.method != 'POST'){

    return res.status(404).json({
      message:"Method not Allowed"
    })
  }

  if(hasBeer === null){
    return res.status(404).json({
      message:"Please send beerID and user email"
    })
  }

  if(hasUser  ===  null){
    return res.status(404).json({
      message:"Please send beerID and user email"
    })
  }
  

  const newReview = await prisma.review.create({
    data:{
      content:content,
      Title:title,
      beerId: hasBeer.id,
      userId: hasUser.id
    }
  })

  return res.status(200).json({
    newReview
  })
}
