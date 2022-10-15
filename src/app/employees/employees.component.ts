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
  filteredEmployees: any[] = employees;
  private _designationFilter: string = '';

  set designationFilter(value: string) {
    this._designationFilter = value;
    this.filteredByDesignation();
  }

  get designationFilter(): string {
    return this._designationFilter;
  }

  constructor() {}

  ngOnInit(): void {}

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }

  filteredByDesignation() {
    this.filteredEmployees = this.employees.filter((employee) =>
      employee.designation
        .toLowerCase()
        .includes(this.designationFilter.toLowerCase())
    );
  }
}
