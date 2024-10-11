import { IProductsFilter } from "src/app/interfaces/filters/products-filter";
import { PaginationFilter } from "src/app/models/filters/pagination-filter";

export class ProductsFilter extends PaginationFilter implements IProductsFilter {
  name?: string;
}
