import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MonthlyTotals } from '../user-dashboard/monthly-totals';

@Injectable({
  providedIn: 'root'
})
export class MonthlyTotalsService {

  constructor(private http: HttpClient) { }

  private monthlyTotalsUrl = 'api/totals';  // URL to web api
  
  getTotals() : Observable<MonthlyTotals> {
    return this.http.get<MonthlyTotals>(this.monthlyTotalsUrl);
  }
}
