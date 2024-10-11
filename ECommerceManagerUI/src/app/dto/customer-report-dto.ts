import { ProductDto } from "src/app/dto/product-dto";

export interface CustomerReportDto {
  ordersCount: string;
  totalAmount: number;
  favoriteProduct: ProductDto;
}
