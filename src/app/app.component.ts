import { Component, OnInit } from '@angular/core';
import { dahsboard } from './model/dashboard-model';
import { DashboardService } from './service/Dashboard.service';
// import { DashboardService } from './service/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test_case_group';
  dashboards: dahsboard[] = [];

  constructor(
    private dashboardService: DashboardService
  ){}

  ngOnInit(): void {
    this.getAllData();
  }
  getAllData(){
    console.log("hehe");
    
    this.dashboardService.getAll().subscribe((item) =>{
      this.dashboards = item
      console.log('oke',item)
    });
  }
  getDataById(id: string){
    this.dashboardService.getById(id).subscribe((item) =>{
      console.log('data',item)
    })

  };

  postData(dashboard: dahsboard){
    this.dashboardService.postData(dashboard).subscribe((item) =>{
      console.log('udeh', item);
      
    })
  }



}
