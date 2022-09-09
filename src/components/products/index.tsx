import axios from "axios";
import useSWRImmutable from "swr";

import ProductCard from './ProductCard'
import { ProductList, Title } from './Products.styles'


const ProductsScreen: React.FC = () => {
  const address = `http://localhost:3000/api/products`;
  const fetcher = async (url:any) => await axios.get(url).then((res:any) => res.data);
  const { data, error } = useSWRImmutable(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;
  return (
    <div>
       <Title>Products</Title>
        <ProductList>
       {data?.map((project:any) => (
          <ProductCard key={project.id} name={project.name} image={project.image} price={project.price}/>
        ))}
        </ProductList>
    </div>
  )
}

export default ProductsScreen