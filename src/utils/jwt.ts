import jwt from 'jsonwebtoken'

const SECRET = 'wiki_beer'


interface IPayload {
  id: string
  email: string
}

export default {
  sign: (payload: IPayload) =>
    jwt.sign(payload, SECRET, { expiresIn: '1d', algorithm: 'HS256' }),

  verify: (token: string) => jwt.verify(token, SECRET),
}