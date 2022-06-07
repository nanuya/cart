import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { Product } from "../../types";
import { fetcher, QueryKeys } from '../../queryClient';

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () => fetcher({
    method: 'GET',
    path: `/products/${id}`
  }));

  console.log(data);

  return (
    <div>상세</div>
  )
}

export default ProductDetail