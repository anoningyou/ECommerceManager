import { IPaginationFilter } from "src/app/interfaces/filters/pagination-filter";

export class PaginationFilter implements IPaginationFilter {
  pageSize: number = 10;
  pageNumber: number = 1;
}
