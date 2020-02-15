import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../user-dashboard/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }

  private activityUrl = 'api/activities';

  getActivities() : Observable<Activity> {
    return this.http.get<Activity>(this.activityUrl);
  }
}
