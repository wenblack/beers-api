// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import {SHA256,} from 'crypto-js'
import jwt from '@/utils/jwt'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    
    const email = String(req.query.email)
    const password = String(req.query.password)

    const hash = String(SHA256(password))
       
  const hasUser = await prisma.user.findUnique({
    where:{
      email:String(email)
    },select:{
      email:true,
      password:true,
      id:true
    }
  })

  if (req.method != 'GET'){
    return res.status(405).json({
      message:"Method not Allowed"
    })
  }

  if(password === undefined){
    return res.status(400).json({
      message:"Some required fields are missing"
    })
  }

  if(hasUser && hash === hasUser.password){
    const token = jwt.sign(hasUser)
    return res.status(200).json({
      message : token
    })
  }
  return res.status(401).json({
    message : "username or password are wrong"
  })
}
