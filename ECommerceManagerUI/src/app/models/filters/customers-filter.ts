import { IPaginationFilter } from "src/app/interfaces/filters/pagination-filter";
import { PaginationFilter } from "src/app/models/filters/pagination-filter";

export class CustomersFilter extends PaginationFilter implements IPaginationFilter {
  name?: string;
}
