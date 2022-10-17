import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from './Employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  title: string = 'Employee Management System';
  employees!: Employee[];
  showIcon: boolean = false;
  filteredEmployees!: Employee[];
  message: string = '';
  subscribe!: Subscription;
  private _designationFilter: string = '';

  set designationFilter(value: string) {
    this._designationFilter = value;
    this.filteredByDesignation();
  }

  get designationFilter(): string {
    return this._designationFilter;
  }

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.subscribe = this.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log(data);
        this.filteredEmployees = data;
        this.employees = this.filteredEmployees;
      },
    });
  }

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

  onMessageReceived(message: string) {
    this.message = message;
  }
}
