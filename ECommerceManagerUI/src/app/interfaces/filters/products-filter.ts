import { IPaginationFilter } from "src/app/interfaces/filters/pagination-filter";

export interface IProductsFilter extends IPaginationFilter {
  name?: string;
}
