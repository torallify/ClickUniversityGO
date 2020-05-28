import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorite, JoinedItem } from './interfaces/favorite';
import { University } from './interfaces/university';


@Injectable()
export class FavoritesDataService {
  id: number;
  email: string;
  universityId: number;
  universityName: string;
  website: string;
  state: string;
  costOnCampusInState: number;
  costOnCampusOutOfState: number;
  costOffCampusInState: number;
  costOffCampusOutOfState: number;
  percentAdmitted: number;
  undergradEnrollment: number;
  numAssociate: number;
  numBachelor: number;
  graduationRate: number;
  aCTComposite: number;
  sATReadWrite: number;
  sATMath: number;
  programEducation: number;
  programEngineering: number;
  programScience: number;
  programMath: number;
  programPhysicalScience: number;
  programBusiness: number;
  constructor(private http: HttpClient) {
  }

  async getFavorites(email : string) {
    return this.http.get<JoinedItem[]>(`/api/favorite/${email}`).toPromise();
  }

  deleteFavorite(ticketid: number) {
    return this.http.delete('/api/favorite/' + ticketid);
  }

  
}
