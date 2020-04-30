import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Revenue } from '../user-dashboard/widgets/revenue';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(private http: HttpClient) { }

  private revenueUrl = 'api/revenue';  // URL to web api
  
  getRevenue() : Observable<Revenue> {
    return this.http.get<Revenue>(this.revenueUrl);
  }
}
