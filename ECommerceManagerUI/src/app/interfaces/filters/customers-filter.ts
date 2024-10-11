import { IPaginationFilter } from "src/app/interfaces/filters/pagination-filter";

export interface ICustomersFilter extends IPaginationFilter {
  name?: string;
}
