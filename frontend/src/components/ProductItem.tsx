import { FC } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductDocument } from "../models/product.interface";
import { useNavigate } from "react-router-dom";

interface ProductComponentProps {
  product: ProductDocument;
}

const ProductItem: FC<ProductComponentProps> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ width: 300, minWidth: 300 }}
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
        {product.description && (
          <Typography variant="body2" color="text.secondary">
            $ {product.description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductItem;
