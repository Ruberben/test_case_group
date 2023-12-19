import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dahsboard } from '../model/dashboard-model';
// import { tutorial } from '../model/tutorial-model';

const baseUrl = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/GetAllUsersData';

@Injectable({
    providedIn: 'root'
})
export class DashboardService{
    constructor(private http: HttpClient){ }

    getAll(): Observable<dahsboard[]> {
        return this.http.get<dahsboard[]>(baseUrl)

    }

    getById(id: string): Observable<dahsboard>{
        return this.http.get(`${baseUrl}/${id}`);
    }

    postData(dashboardmodel: dahsboard){
        const body = {dashboardmodel: dahsboard}
        return this.http.post(`${baseUrl}`, body)
    }
}