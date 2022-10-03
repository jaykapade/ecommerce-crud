import { Product, ProductDocument } from "../../../models/product.interface";
import { api } from "../../../utils/helper";

const getProducts = async () => {
  const response = await api.get<ProductDocument[]>("/product");
  return response;
};

const createProduct = async (newProduct: Product) => {
  const response = await api.post<ProductDocument>("/product", newProduct);
  return response.data;
};

const getProductById = async (id: string) => {
  const response = await api.get<ProductDocument>(`/product/${id}`);
  return response;
};

const productService = {
  getProducts,
  createProduct,
  getProductById,
};

export default productService;
