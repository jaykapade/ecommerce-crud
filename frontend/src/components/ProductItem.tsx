import { FC } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { ProductDocument } from "../models/product.interface";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../redux/slices/products/productAction";
import { useAppDispatch } from "../redux/hooks";

interface ProductComponentProps {
  product: ProductDocument;
}

const ProductItem: FC<ProductComponentProps> = ({ product }) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const deleteProductItem = (e: unknown, id: string) => {
    (e as Event).stopPropagation();
    console.log(id);
    dispatch(deleteProduct(id));
  };
  return (
    <Card
      sx={{ width: 300, minWidth: 300, position: "relative" }}
      onClick={() => navigate(`/product/${product._id}`)}
    >
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/300.png/09f/fff"
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          $ {product.price}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {product.description && (
            <Typography variant="body2" color="text.secondary">
              $ {product.description}
            </Typography>
          )}
          <div
            style={{ cursor: "pointer" }}
            onClick={(e) => deleteProductItem(e, product._id)}
          >
            <DeleteIcon sx={{ color: "red" }} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
