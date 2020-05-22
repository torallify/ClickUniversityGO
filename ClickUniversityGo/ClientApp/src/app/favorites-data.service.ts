import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Favorite, JoinedItem } from './interfaces/favorite';


@Injectable()
export class FavoritesDataService {
  userID: string;
  constructor(private http: HttpClient) {

  }

  getFavorites(id: string) {
    return this.http.get<JoinedItem[]>('/api/favorites/' + id);
  }
  deleteFavorite(ticketid: number) {
    return this.http.delete('/api/favorites/' + ticketid);
  }

  postFavorite(id: number) {
    let item: Favorite = {
      id: 0,
      userId: this.userID,
      universityId: id
    };

    return this.http.post<Favorite>('/api/favorites', item);
  }
}
