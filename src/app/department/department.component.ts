import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HospitalService} from '../hospital.service'

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',

  styleUrls: ['./department.component.css'],
 
})
export class DepartmentComponent implements OnInit {
  result :any;
  isDesc: boolean = false;
  column: string = 'departmentname';
  constructor(private route: ActivatedRoute ,public hospitalservice :HospitalService) { 
    let slugname = this.route.snapshot.paramMap.get('name');
    console.log(slugname)
    
    this.result = this.hospitalservice.Departments.filter(obj => {
      return obj.hospitalname === slugname
    })
    console.log(this.result)
  }

  ngOnInit() {

  }

  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.result.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });
};
}
