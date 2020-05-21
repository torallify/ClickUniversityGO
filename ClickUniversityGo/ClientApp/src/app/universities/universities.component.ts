import { Component } from '@angular/core';
import { UniversitiesDataService } from '../universities-data.service';
import { FavoritesDataService } from '../favorites-data.service';
import { University } from '../interfaces/university';
import { JoinedItem } from '../interfaces/favorite';

@Component({
    selector: 'app-universities',
    templateUrl: './universities.component.html',
    styleUrls: ['./universities.component.scss']
})
/** universities component*/
export class UniversitiesComponent {
/** universities ctor */
  universities: University[];


  constructor(private universityData: UniversitiesDataService,
    private favoriteData: FavoritesDataService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.universityData.getAllUniversities().subscribe(
      (data: University[]) => {
        this.universities = data;
      },
      error => console.error(error)
    );
  }
}
