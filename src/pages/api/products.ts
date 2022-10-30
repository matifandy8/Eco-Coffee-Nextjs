// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

  const products = [  
    {"id":"1","name":"coffee one","price":100, "image":"https://i.ibb.co/fXC75GD/blackcold.webp"},  
    {"id":"2","name":"coffee two","price":50, "image":"https://i.ibb.co/rybxVVv/blackmate.webp"},  
    {"id":"3","name":"coffee three","price":175, "image":"https://i.ibb.co/44Mnt6f/espressomacchiato.webp"},  
    {"id":"4","name":"coffee four","price":120, "image":"https://i.ibb.co/sFLLqFn/phuketlayertumbler.webp"},  
    {"id":"5","name":"coffee five","price":80, "image":"https://i.ibb.co/hsYS6kp/whitecoffe.webp"},  
    {"id":"6","name":"coffee six","price":90, "image":"https://i.ibb.co/fXC75GD/blackcold.webp"}, 
    {"id":"7","name":"coffee seven","price":150, "image":"https://i.ibb.co/sFLLqFn/phuketlayertumbler.webp"},  
    {"id":"8","name":"coffee eight","price":200, "image":"https://i.ibb.co/hsYS6kp/whitecoffe.webp"}  
]  

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {



res.status(200).json(products)
}
