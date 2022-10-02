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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "48px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "48px",
      }}
    >
      {products.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductListing;
