import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { style } from '@angular/animations';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public stroreregistartion :  any=[];
 registartionform = new FormGroup({
  custName : new FormControl(''),
  ageHelp: new  FormControl(''),
  ContactHelp : new FormControl('')
 })
  constructor() { }
   
  ngOnInit() {
  }

  registartion()
  {
    console.warn(this.registartionform.value);
    if(this.registartionform.value.custName=='')
    {
      document.getElementById('nameHelp').innerHTML="<text style='color:red'>please enter your name</text>";
    }
    else if(this.registartionform.value.ageHelp=='')
    {
      document.getElementById('nameHelp').innerHTML="";
      document.getElementById('agedHelp').innerHTML="<text style='color:red'>please enter your age</text>";
    }
    else if(isNaN(this.registartionform.value.ageHelp) )
    {// && parseInt(this.registartionform.value.ageHelp)>=30 && parseInt(this.registartionform.value.ageHelp)<=60
      document.getElementById('agedHelp').innerHTML="";
      document.getElementById('agedHelp').innerHTML="<text style='color:red'>please enter proper age </text>";
    }
    else if(this.registartionform.value.ageHelp.valueOf>=30 && this.registartionform.value.ageHelp.valueOf()<=60)
    {
      document.getElementById('agedHelp').innerHTML="";
      document.getElementById('agedHelp').innerHTML="<text style='color:red'> age between 30 to 60 years</text>";
    }
    else if(this.registartionform.value.ContactHelp=='')
    {
      document.getElementById('agedHelp').innerHTML="";
      document.getElementById('contactHelp').innerHTML="<text style='color:red'>please enter your conatct</text>";
    }
    else if(isNaN(this.registartionform.value.ContactHelp) && parseInt(this.registartionform.value.ContactHelp.length)!=10 )
    {
      document.getElementById('contactHelp').innerHTML="<text style='color:red'>please enter proper contact and should be 10 digit</text>";
    }
    else
    {
      document.getElementById('contactHelp').innerHTML="";
      //this.stroreregistartion= [];
      this.stroreregistartion.unshift(this.registartionform.value);
      console.log(this.stroreregistartion)
      this.registartionform.reset()
    }
    
  }
}
