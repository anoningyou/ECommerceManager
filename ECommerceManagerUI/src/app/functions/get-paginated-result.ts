import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs";
import { IPaginatedResult } from "src/app/interfaces/paginated-result";
import { IPagination } from "src/app/interfaces/pagination";

export function getPaginatedResult<T>(url: string, params: HttpParams, http: HttpClient) {
  const paginatedResult: IPaginatedResult<T> = {};
  return http.get<T>(url, { observe: 'response', params }).pipe(
    map((response) => {
      if (response.body) {
        paginatedResult.result = response.body;
      }
      const pagination = response.headers.get('Pagination');
      if (pagination) {
        paginatedResult.pagination = JSON.parse(pagination) as IPagination;
      }
      return paginatedResult;
    })
  );
}
