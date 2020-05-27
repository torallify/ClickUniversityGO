import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { JoinedItem } from '../interfaces/favorite';
import { UniversitiesDataService } from '../universities-data.service';
import { FavoritesDataService } from '../favorites-data.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
/** favorites component*/
export class FavoritesComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  favorites: JoinedItem[];

  constructor(private authorizeService: AuthorizeService,private uniData: UniversitiesDataService, private favData: FavoritesDataService) {}

  newEmail: string;

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();

    this.authorizeService.getUser().subscribe(user => this.newEmail = user.name);
    this.getFavorites();
  }

  async getFavorites() {
    this.favorites = await this.favData.getFavorites(this.newEmail)
  }

  //deleteFavorite(id: number) {
  //  //replace with name of delete cart item from service
  //  this.favData.deleteFavorite(id).subscribe(
  //    (data: any) => {
  //      console.log(data);
  //      this.getFavorites();
  //    },
  //    error => console.error(error)
  //  );
  //}

}
