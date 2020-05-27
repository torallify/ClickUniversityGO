import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Favorite, JoinedItem } from './interfaces/favorite';


@Injectable()
export class FavoritesDataService {
  email: string;
  constructor(private http: HttpClient) {
    this.email = 'andrewsteward%40gmail.com';
  }

  getFavorites() {
    return this.http.get<JoinedItem[]>('/api/favorite/' + this.email);
  }
  deleteFavorite(ticketid: number) {
    return this.http.delete('/api/favorite/' + ticketid);
  }

  postFavorite(id: number) {
    let item: Favorite = {
      id: 0,
      userId: this.email,
      universityId: id
    };

    return this.http.post<Favorite>('/api/favorite', item);
  }
}
