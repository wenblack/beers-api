// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const data = {
        "beers": "/api/beers/",
        "detail": "/api/detail/",
        "search": "/api/search/",
        "users": "/api/users/",
        "user": "/api/user/",
    }
  res.status(200).json({routes: data })
}



