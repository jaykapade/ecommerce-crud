import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  TextareaAutosize,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Product } from "../models/product.interface";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createProduct } from "../redux/slices/products/productAction";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>();

  const dispatch = useAppDispatch();

  const { isError } = useAppSelector((state) => state.product);

  const onSubmitHandler = (newProduct: Product) => {
    console.log("🚀 ~ newProduct", newProduct);
    dispatch(createProduct(newProduct));
    if (!isError) reset();
  };

  return (
    <>
      <Box
        sx={{
          width: "350px",
          marginTop: 2,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Grid container direction="column" justifyContent="flex-start">
            <Typography variant="h4" component="h1">
              Add Product
            </Typography>

            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
              htmlFor="name"
            >
              Name
            </InputLabel>
            <TextField
              {...register("name", { required: true })}
              type="text"
              variant="outlined"
              size="small"
              placeholder="Product Name"
              error={!!errors.name}
              helperText={!!errors.name ? "Required" : null}
            />

            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
              htmlFor="price"
            >
              Price
            </InputLabel>
            <TextField
              {...register("price", { required: true })}
              type="number"
              variant="outlined"
              size="small"
              placeholder="Product Price"
              error={!!errors.price}
              helperText={!!errors.price ? "Required" : null}
            />
            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
              htmlFor="description"
            >
              Description
            </InputLabel>
            <TextareaAutosize
              {...register("description")}
              minRows={5}
              maxRows={10}
              placeholder="Product Description"
            />

            <Button
              id="register-btn"
              variant="contained"
              style={{
                marginTop: "16px",
                height: "40px",
                backgroundColor: "#4b7af0",
                color: "white",
                textTransform: "none",
              }}
              type="submit"
            >
              Add Product
            </Button>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default AddProduct;
