import { Component } from '@angular/core';
import { UniversitiesDataService } from '../universities-data.service';
import { FavoritesDataService } from '../favorites-data.service';
import { University } from '../interfaces/university';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
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
