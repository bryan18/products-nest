import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    return 'This action return all the products';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} product`;
  }

  @Post()
  create(@Body() body) {
    return body;
    // return `This action creates a coffee`;
  }
}
