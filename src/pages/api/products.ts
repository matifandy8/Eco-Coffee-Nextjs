// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

  const products = [  
    {"id":"1","name":"coffee one","price":100, "image":"https://www.starbucks.co.th/stb-media/2020/08/Black-Matte-Mug-16-oz-600x600.png"},  
    {"id":"2","name":"coffee two","price":50, "image":"https://www.starbucks.co.th/stb-media/2020/08/46.1080-600x600.png"},  
    {"id":"3","name":"coffee three","price":175, "image":"https://www.starbucks.co.th/stb-media/2020/09/116.EspressoMacchiato_Hot_Reserve_BlackEG-600x600.png"},  
    {"id":"4","name":"coffee four","price":120, "image":"https://www.starbucks.co.th/stb-media/2021/03/MerReserveOnGreen_Item3-600x600.png"},  
    {"id":"5","name":"coffee five","price":80, "image":"https://www.starbucks.co.th/stb-media/2020/08/48.1080-600x600.png"},  
    {"id":"6","name":"coffee six","price":90, "image":"https://www.starbucks.co.th/stb-media/2020/08/4.Black-Cold-cup1080-600x600.png"}, 
    {"id":"7","name":"coffee seven","price":150, "image":"https://www.starbucks.co.th/stb-media/2020/08/48.1080-600x600.png"},  
    {"id":"8","name":"coffee eight","price":200, "image":"https://www.starbucks.co.th/stb-media/2020/08/33.Phuket-layer-Tumbler1080-600x600.png"}  
]  

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {



res.status(200).json(products)
}
