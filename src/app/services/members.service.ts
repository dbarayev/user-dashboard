import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Member } from '../projects/members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  private memberUrl = 'api/members';

  getMembers() : Observable<Member> {
    return this.http.get<Member>(this.memberUrl);
  }
}
