import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})

export class HelperService {


  constructor(private toastr: ToastrService,private spinner: NgxSpinnerService) {
    
}

showtostmessage(message, titel,config) {
  
  this.toastr.success(message,titel ,config);
}

createLoadingBar()
  {
  //   this.spinner.show();
  //   return this.loadingCtrl.create({
  //     spinner: 'hide',
  //     content: '<img src="assets/imgs/loader.gif" alt="">',
  //     dismissOnPageChange: false,
  // });
  }
}
