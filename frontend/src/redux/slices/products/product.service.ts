import { ProductDocument } from "../../../models/product.interface";
import { api } from "../../../utils/helper";

const getProducts = async () => {
  const response = await api.get<ProductDocument[]>("/product");

  return response;
};

const productService = {
  getProducts,
};

export default productService;
