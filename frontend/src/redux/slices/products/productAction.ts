import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../../models/product.interface";
import productService from "./product.service";

type updateInfo = {
  updatedProduct: Product;
  id: string;
};

export const getProducts = createAsyncThunk("product", async () => {
  try {
    return await productService.getProducts();
  } catch (error) {
    console.log("Error: ", error);
  }
});
export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id: string) => {
    try {
      return await productService.getProductById(id);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: string) => {
    try {
      return await productService.deleteProduct(id);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (newProduct: Product) => {
    try {
      return await productService.createProduct(newProduct);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ updatedProduct, id }: updateInfo) => {
    try {
      return await productService.updateProduct(updatedProduct, id);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
);
