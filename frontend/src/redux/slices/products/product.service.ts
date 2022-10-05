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

const updateProduct = async (updatedProduct: Product, id: string) => {
  const response = await api.patch<ProductDocument>(
    `/product/${id}`,
    updatedProduct
  );
  return response.data;
};

const getProductById = async (id: string) => {
  const response = await api.get<ProductDocument>(`/product/${id}`);
  return response;
};

const deleteProduct = async (id: string) => {
  const response = await api.delete<{
    success: boolean;
    message: string;
    id: string;
  }>(`/product/${id}`);
  return response;
};

const productService = {
  getProducts,
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
};

export default productService;
