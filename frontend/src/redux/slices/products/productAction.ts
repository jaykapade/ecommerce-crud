import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../../models/product.interface";
import productService from "./product.service";

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
