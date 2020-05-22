import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { University } from '../app/interfaces/university';

@Injectable()
export class UniversitiesDataService {
  userID: string;
  constructor(private http: HttpClient) {
   
  }

  getAllUniversities() {
    return this.http.get<University[]>('/api/university/')
  }

}
