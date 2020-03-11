import { Component, OnInit } from '@angular/core';
import { employee } from './employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  emp:employee={
    firstName:null,
    lastName:null,
    email:null,
    contactNumber: null,
    address:null,
    userName:null,
    password: null,
    gender: null,
    qualification: null,
    experience: null,
    codingLanguages:{"C/C++":false,"Java":false,"C#":false,"PHP":false,"Python":false}
  };
  quals:string[];
  exps:number[];
  langs:string[];

  ngOnInit(): void {
    this.quals=['Class X Board','Class XII Board','Graduation Degree','Masters Degree'];
    this.exps=[0,1,2,3,4,5,6,7];
    this.langs=['C/C++','Java','C#','PHP','Python'];
  }

  display(){
    let output = '';
 for (let property in this.emp) {
   output= property + ': ' + this.emp[property];
   console.log(output);
 }

   var result = Object.entries(this.emp.codingLanguages);
   for(var i = 0; i < result.length; i++) {
       for(var j = 0; j < result[i].length; j+=2) {
           console.log(result[i][j] +' : '+result[i][j+1]);
       }
     }
   }
}
