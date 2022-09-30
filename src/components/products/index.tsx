import axios from "axios";
import useSWRImmutable from "swr";
import Loader from "../loader";

import ProductCard from './ProductCard'
import { LoaderBox, ProductList, Title } from './Products.styles'
import { IProduct } from "./type";


const ProductsScreen: React.FC = () => {
  const address = `http://localhost:3000/api/products`;
  const fetcher = async (url:any) => await axios.get(url).then((res:any) => res.data);
  const { data, error } = useSWRImmutable(address, fetcher);

  if (error) return <p>Loading failed...</p>;
  if (!data) return <LoaderBox><Loader/></LoaderBox> ;
  return (
    <div>
       <Title>Products</Title>
        <ProductList>
       {data?.map((product:IProduct) => (
          <ProductCard key={product.id} productItem={product}/>
        ))}
        </ProductList>
    </div>
  )
}

export default ProductsScreen