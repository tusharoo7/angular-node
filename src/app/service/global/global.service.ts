import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public apiservice :ApiService) { }
  getlogindata(data)
  {
    let api_url = "dologin"
    return this.apiservice.commonservice(api_url,JSON.stringify(data))

  }
}
