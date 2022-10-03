import { createSlice } from "@reduxjs/toolkit";
import { ProductDocument } from "../../../models/product.interface";
import { createProduct, getProducts, updateProduct } from "./productAction";

interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface ProductState extends AsyncState {
  products: ProductDocument[];
  product: ProductDocument | null;
}

const initialState: ProductState = {
  products: [],
  product: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload?.data || [];
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.products = [];
      })
      // .addCase(getProductById.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getProductById.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true;
      //   state.product = action.payload?.data || null;
      // })
      // .addCase(getProductById.rejected, (state) => {
      //   state.isLoading = false;
      //   state.isError = true;
      //   state.product = null;
      // })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        if (action.payload) state.products.push(action?.payload);
      })
      .addCase(createProduct.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // if (action.payload) state.products.push(action?.payload);
      })
      .addCase(updateProduct.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
