import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { Employee } from './Employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpService: HttpService) {}

  getEmployees(): Observable<Employee[]> {
    const data = this.httpService.getAllEmployees();
    console.log(data);
    return data;
  }
}
