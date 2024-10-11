import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ServiceConstants } from "src/app/constants/service-constants";
import { ProductDto } from "src/app/dto/product-dto";
import { getPaginatedResult } from "src/app/functions/get-paginated-result";
import { IProductsFilter } from "src/app/interfaces/filters/products-filter";
import { IPaginatedResult } from "src/app/interfaces/paginated-result";
import { BaseHttpService } from "src/app/services/base-http.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseHttpService {

  constructor() {
    super();
  }

  //#region Public Methods

  public getProducts(filter: IProductsFilter): Observable<IPaginatedResult<ProductDto[]>> {

    return getPaginatedResult<ProductDto[]>(this.getUrl(ServiceConstants.Products.GetProducts), this.getHttpParams(filter), this.http);
  }

  //#endregion Public Methods
}
