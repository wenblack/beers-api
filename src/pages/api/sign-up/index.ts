// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import {SHA256} from 'crypto-js'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    
    const {name, email, password, confirmPassword} = req.body
    const hash = String(SHA256(password))
    
  const hasUser = await prisma.user.findUnique({
    where:{
      email:String(email)
    },select:{
      email:true
    }
  })

  if (req.method != 'POST'){
    return res.status(405).json({
      message:"Method not Allowed"
    })
  }

  if(password === undefined){
    return res.status(400).json({
      message:"Some required fields are missing"
    })
  }

  if(confirmPassword === undefined){
    return res.status(400).json({
      message:"Some required fields are missing"
    })
  }

  if(hasUser){
    return res.status(401).json({
      message : "E-mail already registered! Did you forget your password?"
    })
  }

  if(password != confirmPassword){
    return res.status(400).json({
      message : "Passwords dont matching"
    })
  }

  const newUser = await prisma.user.create({
    data:{
      email:email,
      name:name,
      password:hash,
    },
    select:{
      email:true
    }
  })


  return res.status(201).json({
    message: `User ${newUser.email} created!`
  })
}
