import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../user-dashboard/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  private projectsUrl = 'api/projects';

  getProjects() : Observable<Project> {
    return this.http.get<Project>(this.projectsUrl);
  }
}
