import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from 'src/dto/product.dto';
import { ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async createProduct(productInfo: ProductDto): Promise<ProductDocument> {
    try {
      const newProduct = new this.productModel(productInfo);
      return await newProduct.save();
    } catch (error) {
      throw new HttpException(
        { success: false, message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAllProducts(): Promise<ProductDocument[]> {
    //exec used to get Promise find does return thenable similar to promise, its just better practice
    return await this.productModel.find().exec();
  }

  async findProduct(id: string): Promise<ProductDocument> {
    //exec used to get Promise find does return thenable similar to promise, its just better practice
    try {
      const product = await this.productModel.findById(id).exec();
      if (!product)
        throw new HttpException(
          { message: `No Product with id: ${id} found` },
          HttpStatus.NOT_FOUND,
        );
      return product;
    } catch (error) {
      throw new HttpException(
        { success: false, message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updateProduct(
    id: string,
    newProductInfo: ProductDto,
  ): Promise<ProductDocument> {
    try {
      //exec used to get Promise find does return thenable similar to promise, its just better practice
      //Check if empty object
      if (Object.keys(newProductInfo).length === 0)
        throw new HttpException(
          'Needs data to update the product',
          HttpStatus.BAD_REQUEST,
        );
      const product = await this.productModel.findByIdAndUpdate(
        id,
        newProductInfo,
        {
          new: true,
        },
      );

      if (!product) {
        throw new HttpException(
          `Product with id: ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      }

      return product;
    } catch (error) {
      throw new HttpException(
        { success: false, message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteProduct(id: string) {
    try {
      const product = await this.productModel.findByIdAndDelete(id);
      if (!product) {
        throw new HttpException(
          `Product with id: ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      }
      return { success: true, message: 'Product was deleted successfully' };
    } catch (error) {
      throw new HttpException(
        { success: false, message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
