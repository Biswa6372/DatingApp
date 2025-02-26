import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member } from '../_models/member';


@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private http = inject(HttpClient);
  baseurl = environment.apiUrl;
  getMembers(){
    return this.http.get<Member[]>(this.baseurl + 'users');
  }

  getMember(username: string){
    return this.http.get<Member>(this.baseurl + 'users/' + username);
  }
}
