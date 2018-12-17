import { Component, OnInit } from '@angular/core';
import {HelperService} from '../service/helper/helper.service'
import {GlobalService} from '../service/global/global.service'
import {StorageService} from '../service/storage/storage.service'
import { Router} from '@angular/router';
@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LoginComponent implements OnInit {
  username :any;
  password :any;

  constructor(public router: Router, public helperservice :HelperService,public globalService: GlobalService,public storageService: StorageService) { }

  ngOnInit() {
  }

  dologin()
  { 
    console.log(this.username)
    if(this.username==undefined)
    {
      this.helperservice.showtostmessage("please enter your username","USER NAME",{});
    }
    else if(this.password==undefined)
    {
      this.helperservice.showtostmessage("please enter your password","PASSWORD",{});
    }
    else
    {
      let body = {
                    'username':this.username,
                    'password':this.password
                  }
       this.globalService.getlogindata(body).subscribe((req)=>{
                     console.log(req)
                     this.router.navigate(['admin/dashboard']);
       },(err)=>{
        //console.log(err)
        this.helperservice.showtostmessage(err,"SERVER ERROR",{});
       })           
     // this.http.post("http://localhost:8081/dologin", body).subscribe((req)=>{},(err)=>{})
    }
  }
}
