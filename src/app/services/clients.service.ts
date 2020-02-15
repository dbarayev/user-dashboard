import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from '../user-dashboard/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  private clientUrl = 'api/clients';  // URL to web api
  
  getClients() : Observable<Client> {
    return this.http.get<Client>(this.clientUrl);
  }
}