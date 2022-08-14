// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

  const products = [  
    {"name":"coffee one", "image":"https://www.starbucks.co.th/stb-media/2020/08/Black-Matte-Mug-16-oz-600x600.png"},  
    {"name":"coffee two", "image":"https://www.starbucks.co.th/stb-media/2020/08/46.1080-600x600.png"},  
    {"name":"coffee three", "image":"https://www.starbucks.co.th/stb-media/2020/09/116.EspressoMacchiato_Hot_Reserve_BlackEG-600x600.png"},  
    {"name":"coffee four", "image":"https://www.starbucks.co.th/stb-media/2021/03/MerReserveOnGreen_Item3-600x600.png"},  
    {"name":"coffee five", "image":"https://www.starbucks.co.th/stb-media/2020/08/48.1080-600x600.png"},  
    {"name":"coffee six", "image":"https://www.starbucks.co.th/stb-media/2020/08/4.Black-Cold-cup1080-600x600.png"}, 
    {"name":"coffee seven", "image":"https://www.starbucks.co.th/stb-media/2020/08/48.1080-600x600.png"},  
    {"name":"coffee eigth", "image":"https://www.starbucks.co.th/stb-media/2020/08/33.Phuket-layer-Tumbler1080-600x600.png"}  
]  

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {



res.status(200).json(products)
}
