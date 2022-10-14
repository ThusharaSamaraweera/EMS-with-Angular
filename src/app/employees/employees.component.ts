import { Component, OnInit } from '@angular/core';
import employees from './data/employees.json';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  title: string = 'Employee Management System';
  employees: any[] = employees;
  showIcon: boolean = false;

  constructor() {}

  ngOnInit(): void { }

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }
}
