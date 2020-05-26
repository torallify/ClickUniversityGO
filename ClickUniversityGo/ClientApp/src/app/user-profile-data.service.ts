import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserProfile} from './interfaces/userProfile'

@Injectable()
export class UserProfileDataService {
    constructor(private http: HttpClient) {

    }
  async addNewUser(userProfile:Partial<UserProfile>) {

    return this.http.post<number>('/api/userProfile', userProfile).toPromise();
  }
}
