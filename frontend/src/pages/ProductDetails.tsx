import { useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../redux/slices/products/productAction";

const ProductDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (updatedProduct: Product) => {
    console.log("🚀 ~ newProduct", updatedProduct);
    dispatch(updateProduct({ updatedProduct, id: id || "" }));
    navigate("/");
  };

  const { products } = useAppSelector((state) => state.product);

  const { id } = useParams();
  const { name, price, description } = products.filter(
    (product) => product._id === id
  )[0];
  return (
    <Box
      sx={{
        border: 1,
        padding: 2,
        borderColor: "#cccccc",
        width: "350px",
        marginTop: 8,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography variant="h4" component="h1">
            Product Details
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
            defaultValue={name}
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
            defaultValue={price}
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
            defaultValue={description}
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
            Update Product
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default ProductDetails;
