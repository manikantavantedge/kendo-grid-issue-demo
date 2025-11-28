import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { Employee } from './models';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  imports: [CommonModule, GridModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{

  protected readonly title = signal('kendo-grid-issue-demo');
  protected dataService = inject(DataService);
  protected $employeeList=signal<Employee[]>([]);
    ngOnInit(): void {
      this.dataService.getEmployees().subscribe(data=>{
        this.$employeeList.set(data);
        console.log('Employee Data:', data);
      })
  }
}
