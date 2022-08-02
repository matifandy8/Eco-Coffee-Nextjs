import axios from "axios";
import useSWR from "swr";

import ProductCard from './ProductCard'
import { ProductList, Title } from './Products.styles'


const ProductsScreen: React.FC = () => {
  const address = `http://localhost:3000/api/products`;
  const fetcher = async (url:any) => await axios.get(url).then((res:any) => res.data);
  const { data, error } = useSWR(address, fetcher);

  console.log(data)

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  return (
    <div>
       <Title>Products</Title>
        <ProductList>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </ProductList>
    </div>
  )
}

export default ProductsScreen