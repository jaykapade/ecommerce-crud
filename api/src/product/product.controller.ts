import { Body, Controller, Post } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  createProduct(@Body() productInfo: ProductDto) {
    return this.productService.createProduct(productInfo);
  }
}
