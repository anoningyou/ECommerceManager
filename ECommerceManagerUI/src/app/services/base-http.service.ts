import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService {

  private _baseUrl = environment.apiUrl;

  protected http: HttpClient = inject(HttpClient);

  protected get baseUrl(): string {
    return this._baseUrl;
  }

  constructor() {
      if(!this._baseUrl.endsWith('/'))
        this._baseUrl = `${this._baseUrl}/`
  }

  protected getUrl(action: string): string {
    return `${this.baseUrl}${action}`;
  }

  protected getHttpParams(filter: object): HttpParams {
    let params = new HttpParams();
    
    for (const key in filter) {
      if (filter.hasOwnProperty(key)) {
        const value = (filter as any)[key];
        if (value !== undefined && value !== null) {
          if (value instanceof Date) {
            params = params.append(key, value.toUTCString());
          }
          else if (typeof value === 'object') {
            params = params.append(key, JSON.stringify(value));
          }
          else {
            params = params.append(key, value);
          }
        }
      }
    }
    return params;
  }
}
