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
  actTest: University[];
  searchName: string;
  searchStateInput: string;
  searchActInput: number;

  constructor(private universityData: UniversitiesDataService,
    private favoriteData: FavoritesDataService) { }

  ngOnInit() {
    this.searchName = "";
    this.searchStateInput = "MI";
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

  searchMaxACT() {
    
    this.universityData.searchACT(this.searchActInput).subscribe(
      (data: University[]) => {
        this.actTest = data;
      },
      error => console.error(error)
    );
  }
}
