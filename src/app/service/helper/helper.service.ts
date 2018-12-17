import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})

export class HelperService {


  constructor(private toastr: ToastrService) {
    
}

showtostmessage(message, titel,config) {
  
  this.toastr.success(message,titel ,config);
}
}
