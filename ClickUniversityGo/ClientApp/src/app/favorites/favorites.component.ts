import { Component } from '@angular/core';
import { JoinedItem } from '../interfaces/favorite';
import { UniversitiesDataService } from '../universities-data.service';
import { FavoritesDataService } from '../favorites-data.service';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
/** favorites component*/
export class FavoritesComponent {

  favorites: JoinedItem[];
  constructor(private uniData: UniversitiesDataService, private favData: FavoritesDataService) {

  }

  ngOnInit() {
    //replace with name of get from service
    //this.favData.email = this.uniData.userID;
    this.getFavorites();
  }

  getFavorites() {
    this.favData.getFavorites().subscribe(
      (data: JoinedItem[]) => {
        this.favorites = data;
      },
      error => console.error(error)
    );
  }

  deleteFavorite(id: number) {
    //replace with name of delete cart item from service
    this.favData.deleteFavorite(id).subscribe(
      (data: any) => {
        console.log(data);
        this.getFavorites();
      },
      error => console.error(error)
    );
  }

}
