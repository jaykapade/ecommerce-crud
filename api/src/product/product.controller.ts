import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { ProductDocument } from './product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  findAllProducts(): Promise<ProductDocument[]> {
    return this.productService.findAllProducts();
  }
  @Get(':id')
  findProduct(@Param('id') id: string): Promise<ProductDocument> {
    return this.productService.findProduct(id);
  }
  @Post()
  createProduct(@Body() productInfo: ProductDto): Promise<ProductDocument> {
    return this.productService.createProduct(productInfo);
  }
  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() newProductInfo,
  ): Promise<ProductDocument> {
    return this.productService.updateProduct(id, newProductInfo);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
