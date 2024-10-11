import { IPagination } from "src/app/interfaces/pagination";

export interface IPaginatedResult<T> {
  result?: T;
  pagination?: IPagination;
}
