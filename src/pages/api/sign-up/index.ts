// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  const {name, email, password, confirmPassword} = req.body
  const hasUser = await prisma.user.findUnique({
    where:{
      email:email
    }
  })

  if (req.method != 'POST'){
    return res.status(404).json({
      message:"Method not Allowed"
    })
  }

  if(password === undefined){
    return res.status(404).json({
      message:"Some required fields are missing"
    })
  }

  if(confirmPassword === undefined){
    return res.status(404).json({
      message:"Some required fields are missing"
    })
  }

  if(hasUser){
    return res.status(200).json({
      message : "E-mail already registered! Did you forget your password?"
    })
  }

  if(password != confirmPassword){
    return res.status(200).json({
      message : "Passwords dont matching"
    })
  }

  const newUser = await prisma.user.create({
    data:{
      email:email,
      name:name,
      password:password,
    },
    select:{
      email:true
    }
  })
  return res.status(200).json({
    message: `User ${newUser.email} created!`
  })
}
