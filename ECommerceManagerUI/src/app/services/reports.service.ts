import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ServiceConstants } from "src/app/constants/service-constants";
import { CustomerReportDto } from "src/app/dto/customer-report-dto";
import { IReportFilter } from "src/app/interfaces/filters/report-filter";
import { BaseHttpService } from "src/app/services/base-http.service";

@Injectable({
  providedIn: 'root'
})
export class ReportsService extends BaseHttpService {

  constructor() {
    super();
  }

  //#region Public Methods

  public getCustomerReport(filter: IReportFilter): Observable<CustomerReportDto> {
    const params = this.getHttpParams(filter);
    return this.http.get<CustomerReportDto>(this.getUrl(ServiceConstants.Reports.GetCustomerReport), { params });
  }

  //#endregion Public Methods
}
