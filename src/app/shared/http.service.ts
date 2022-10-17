import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employees/Employee.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + 'employees');
  }
}
