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
  actMathcedUniversities: University[];
  satMatchedUniversities: University[];
  satTest: University[];
  actTest: University[];
  combined: University[];
  searchName: string;
  searchStateInput: string;
  searchActInput: number;
  searchSatInput: number;
  searchResult: any;
  hideStates: boolean;

  constructor(private universityData: UniversitiesDataService,
    private favoriteData: FavoritesDataService) { }

  ngOnInit() {
    this.searchName = "";
    this.searchStateInput = "";

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

  toggleShowStates = function () {
    this.hideStates = !this.hideStates;
  }

  searchUniversity(university: string): boolean {

    return university.toLowerCase().includes(this.searchName.toLowerCase());
  }

  searchState(university: string): boolean {

    return university.includes(this.searchStateInput);
  }

  searchMaxACT(): any {

    this.universityData.searchACT(this.searchActInput).subscribe(
      (data: University[]) => {
        this.actTest = data;
      },
      error => console.error(error)
    );
  }

  searchMaxSAT(): any {

    this.universityData.searchSAT(this.searchSatInput).subscribe(
      (data: University[]) => {
        this.satTest = data;
      },
      error => console.error(error)
    );
  }
  search(SAT: any, ACT: any, State: string): any {
    if (((SAT != null) && (SAT != ""))
      && ((ACT != null) && (ACT != ""))) {
      this.universityData.searchSAT(SAT).subscribe(
        (data: University[]) => {
          this.satMatchedUniversities = data;
          console.log(this.satMatchedUniversities);
          if (State == "") {
            this.satMatchedUniversities = this.satMatchedUniversities.filter(univ => univ.actComposite <= ACT);
          }
          else {
            this.satMatchedUniversities = this.satMatchedUniversities.filter(univ => univ.actComposite <= ACT);
            this.satMatchedUniversities = this.satMatchedUniversities.filter(univ => univ.state == State);
          }
          console.log(this.satMatchedUniversities);
        },
        error => console.error(error)
      );
    }
    else if (ACT == "" || ACT == null) {
      this.universityData.searchSAT(SAT).subscribe(
        (data: University[]) => {
          if (State == "") {
            this.satMatchedUniversities = data;
          }
          else {
            this.satMatchedUniversities = data;
            this.satMatchedUniversities = this.satMatchedUniversities.filter(univ => univ.state == State);
          }
          console.log(this.satMatchedUniversities);

        },
        error => console.error(error)
      );
    }
    else {
      this.universityData.searchACT(ACT).subscribe(
        (data: University[]) => {
          if (State == "") {
            this.satMatchedUniversities = data;
          }
          else {
            this.satMatchedUniversities = data;
            this.satMatchedUniversities = this.satMatchedUniversities.filter(univ => univ.state == State);
          }
          console.log(this.satMatchedUniversities);

        },
        error => console.error(error)
      );
    }

  }
  //search(SAT: any, ACT: any): any {
  //  if (((SAT != null) && (SAT != ""))
  //    && ((ACT != null) && (ACT != ""))) {
  //    this.universityData.searchSAT(SAT).subscribe(
  //      (data: University[]) => {
  //        this.satMatchedUniversities = data;
  //        console.log(this.satMatchedUniversities);
  //        this.satMatchedUniversities = this.satMatchedUniversities.filter(univ => univ.actComposite <= ACT);
  //        console.log(this.satMatchedUniversities);
  //      },
  //      error => console.error(error)
  //    );
  //  }
  //  else if (ACT == "" || ACT == null) {
  //    this.universityData.searchSAT(SAT).subscribe(
  //      (data: University[]) => {
  //        this.satMatchedUniversities = data;
  //        console.log(this.satMatchedUniversities);

  //      },
  //      error => console.error(error)
  //    );
  //  }
  //  else {
  //    this.universityData.searchACT(ACT).subscribe(
  //      (data: University[]) => {
  //        this.satMatchedUniversities = data;
  //        console.log(this.satMatchedUniversities);

  //      },
  //      error => console.error(error)
  //    );
  //  }

  //}
}
