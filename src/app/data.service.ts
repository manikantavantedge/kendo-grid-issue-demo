import { Injectable } from '@angular/core';
import { Employee } from './models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

 public employees: Employee[] = [
    { name: 'John Doe', id: 301, role: 'Developer', experience: 5 ,company:'ABC Corp', location:'New York', onSite:true },
    { name: 'Jane Smith', id: 302, role: 'Designer', experience: 3, company:'XYZ Ltd', location:'San Francisco', onSite:false },
    { name: 'Bob Johnson', id: 303, role: 'Manager', experience: 10 ,company:'Tech Solutions', location:'Chicago', onSite:true },
    { name: 'Alice Brown', id: 304, role: 'Tester', experience: 2 ,company:'Innovatech', location:'Seattle', onSite:false },
  ];
  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }
}