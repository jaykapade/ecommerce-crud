import { createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./product.service";

export const getProducts = createAsyncThunk("product", async () => {
  try {
    return await productService.getProducts();
  } catch (error) {
    console.log("Error: ", error);
  }
});
