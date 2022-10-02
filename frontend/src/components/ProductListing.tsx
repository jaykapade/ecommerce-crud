import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getProducts } from "../redux/slices/products/productAction";
import ProductItem from "./ProductItem";

const ProductListing: FC = () => {
  const { products } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </>
  );
};

export default ProductListing;
