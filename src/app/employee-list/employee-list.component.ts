
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class employeelistComponent implements OnInit {
  employees: employee[];
  constructor(private service: employeeService,
              private route: Router) { }

  ngOnInit() {
this.getData();
  }


    deleteEmployee(employee: Employee): void {
    if (employee.id === 0) {
      this.getData();
    } else {
      if (confirm(`Delete the product: ${employee.firstname}?`)) {
        this.service.deleteEmployee(employee.id)
          .subscribe(
            () => this.getData()
          );
      }
    }
  }

  getData(): void {
    this.service.getEmployees().subscribe(
      emp => {
        this.employees = emp;
      }
    );
  }

}
