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
  searchName: string;
  searchStateInput: string;


  constructor(private universityData: UniversitiesDataService,
    private favoriteData: FavoritesDataService) { }

  ngOnInit() {
    this.searchName = "";
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

  searchUniversity(university: string): boolean {

    return university.toLowerCase().includes(this.searchName.toLowerCase());
  }

  searchState(university: string): boolean {

    return university.includes(this.searchStateInput);
  }

}
