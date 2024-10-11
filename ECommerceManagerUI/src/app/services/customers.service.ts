import { HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ServiceConstants } from "src/app/constants/service-constants";
import { CustomerDto } from "src/app/dto/customer-dto";
import { getPaginatedResult } from "src/app/functions/get-paginated-result";
import { ICustomersFilter } from "src/app/interfaces/filters/customers-filter";
import { IPaginatedResult } from "src/app/interfaces/paginated-result";
import { BaseHttpService } from "src/app/services/base-http.service";

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends BaseHttpService {

  constructor() {
    super();
  }

  //#region Public Methods

  public getCustomers(filter: ICustomersFilter): Observable<IPaginatedResult<CustomerDto[]>> {

    return getPaginatedResult<CustomerDto[]>(this.getUrl(ServiceConstants.Customers.GetCustomers), this.getHttpParams(filter), this.http);
  }

  public getCustomer(id: string): Observable<CustomerDto> {
    return this.http.get<CustomerDto>(this.getUrl(ServiceConstants.Customers.GetCustomer), { params: new HttpParams().set('id', id) });
  }

  //#endregion Public Methods
}
