// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

  const products = {"products":[  
    {"name":"coffee one", "image":"https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-Latte.jpg.webp?itok=bVdCHhYt"},  
    {"name":"coffee two", "image":"https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-Latte.jpg.webp?itok=bVdCHhYt"},  
    {"name":"coffee three", "image":"https://www.starbucks.es/sites/starbucks-es/files/styles/c06_cards_grid_560x321/public/2022-03/SBX-UK-MOP-Latte.jpg.webp?itok=bVdCHhYt"}  
]}  

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {



res.status(200).json(products)
}
