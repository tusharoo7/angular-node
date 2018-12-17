import { Injectable } from '@angular/core';
import { 
  HttpClient , 
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { Constants } from "../constants";

import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';
 import {throwError} from 'rxjs';  // Updated for Angular 6/RxJS 6
const API_BASE_URL = Constants.API_BASE_URL;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint: string;
  constructor( private http: HttpClient) { }
  public handleError(error: HttpErrorResponse) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
   // return Observable.throw(errMsg);
   // Updated for Angular 6/RxJS 6
   return throwError(errMsg);
    }
  setApiEndpoint(route: string): void {
    this.endPoint = API_BASE_URL + "/" + route;
  }

  getApiEndPoint(): string {
    return this.endPoint;
  }

  getDefaultHeaders(): HttpHeaders {
    let defaultHeaders = new HttpHeaders({
            'Content-Type':  'application/x-www-form-urlencoded;charset=UTF-8'
          });
    
    return defaultHeaders;
  }
  commonservice(route: string, paramsPayload: string): Observable<any>
  {
    
    //console.log("hurray its worked fine !");
    this.setApiEndpoint(route);
    let urlSearchParams = new URLSearchParams();
    let paylod = JSON.parse(paramsPayload);
    for(let key in paylod)
    urlSearchParams.append(key, paylod[key]);
    let body = urlSearchParams.toString();
    this.setApiEndpoint(route);
    console.log(this.getApiEndPoint());
    console.log(body);
    //console.log(this.getDefaultHeaders());
    let httpRequestOptions = { headers: this.getDefaultHeaders() };
    return this.http.post(this.getApiEndPoint(), body, httpRequestOptions).catch(this.handleError);
  }
}
