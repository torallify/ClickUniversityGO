import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { University } from '../app/interfaces/university';
import { Favorite } from './interfaces/favorite';


@Injectable()
export class UniversitiesDataService {
  userID: string;
  constructor(private http: HttpClient) {
   
  }

  getAllUniversities() {
    return this.http.get<University[]>('/api/university/')
  }

  getUniversity(id: number) {
    return this.http.get<University>(`/api/university/${id}`)
  }

  searchACT(id: number) {
    return this.http.get<University[]>(`/api/university/act/${id}`)
  }
  searchSAT(id: number) {
    return this.http.get<University[]>(`/api/university/sat/${id}`)
  }
  searchCostOnCampusInState(id: number) {
    return this.http.get<University[]>(`/api/university/on-campus-in-state/${id}`)
  }
  searchCostOnCampusOutOfState(id: number) {
    return this.http.get<University[]>(`/api/university/on-campus-out-of-state/${id}`)
  }
  searchCostOffCampusInState(id: number) {
    return this.http.get<University[]>(`/api/university/off-campus-in-state/${id}`)
  }
  searchCostOffCampusOutOfState(id: number) {
    return this.http.get<University[]>(`/api/university/off-campus-out-of-state/${id}`)
  }

  async postFavoriteUniversity(favorite: Partial<Favorite>) {
    //let favoriteUniversity: Favorite = {
    //  id: 0,
    //  email: email,
    //  universityId: id
    //};
    return this.http.post<Favorite>('/api/favorite', favorite).toPromise();
  }
}
