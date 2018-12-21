import { Component, OnInit } from '@angular/core';
import {HospitalService} from '../hospital.service'
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
public hospitaldata :any;
  constructor( public hospitalservice :HospitalService ) { }

  ngOnInit() {
    console.log(this.hospitalservice.Hospitals)
    this.hospitaldata = this.hospitalservice.Hospitals
  }

}
