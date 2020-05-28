import { Component, OnInit , Input} from '@angular/core';
import { UniversitiesDataService } from '../universities-data.service';
import { University } from '../interfaces/university';
import { JoinedItem , Favorite} from '../interfaces/favorite';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
/** universities component*/
export class UniversitiesComponent {
  /** universities ctor */
  @Input() id: number;
  universities: University[];
  actMathcedUniversities: University[];
  searchResults: University[];
  satTest: University[];
  actTest: University[];
  combined: University[];
  searchName: string;
  searchStateInput: string;
  searchActInput: number;
  searchSatInput: number;
  searchResult: any;
  hideName: boolean;
  newEmail: string;
  public isAuthenticated: Observable<boolean>;

  constructor(private authorizeService: AuthorizeService,private universityData: UniversitiesDataService,
    ) { }

  ngOnInit() {
    this.searchName = "";
    this.searchStateInput = "";
    this.hideName = true;
    this.search(1600, 36, "");
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.authorizeService.getUser().subscribe(user => this.newEmail = user.name);
  }

  get() {
    this.universityData.getAllUniversities().subscribe(
      (data: University[]) => {
        this.universities = data;
      },
      error => console.error(error)
    );
  }

  toggleShowNames = function () {
    this.hideName = false;
  }

  clearFilters() {
    this.searchActInput = null;
    this.searchSatInput = null;
    this.searchStateInput = "";
  }

  searchUniversity(university: string): boolean {

    return university.toLowerCase().includes(this.searchName.toLowerCase());
  }

  searchState(university: string): boolean {

    return university.includes(this.searchStateInput);
  }

  async postFavoriteUniversity(universityId: number) {
    await this.universityData.postFavoriteUniversity({email: this.newEmail, universityId: universityId })
  }


  search(SAT: any, ACT: any, State: string): any {
    if (((SAT != null) && (SAT != ""))
      && ((ACT != null) && (ACT != ""))) {
      this.universityData.searchSAT(SAT).subscribe(
        (data: University[]) => {
          this.searchResults = data;
          console.log(this.searchResults);
          if (State == "") {
            this.searchResults = this.searchResults.filter(univ => univ.actComposite <= ACT);
          }
          else {
            this.searchResults = this.searchResults.filter(univ => univ.actComposite <= ACT);
            this.searchResults = this.searchResults.filter(univ => univ.state == State);
          }
          console.log(this.searchResults);
        },
        error => console.error(error)
      );
    }
    else if ((ACT == "" || ACT == null) && (SAT != null && SAT != "")){
      this.universityData.searchSAT(SAT).subscribe(
        (data: University[]) => {
          if (State == "") {
            this.searchResults = data;
          }
          else {
            this.searchResults = data;
            this.searchResults = this.searchResults.filter(univ => univ.state == State);
          }
          console.log(this.searchResults);

        },
        error => console.error(error)
      );
    }

    else if ((SAT == "" || SAT == null) && (ACT != null && ACT != "")) {
      this.universityData.searchACT(ACT).subscribe(
        (data: University[]) => {
          if (State == "") {
            this.searchResults = data;
          }
          else {
            this.searchResults = data;
            this.searchResults = this.searchResults.filter(univ => univ.state == State);
          }
          console.log(this.searchResults);

        },
        error => console.error(error)
      );
    }
    else {
      this.universityData.searchACT(36).subscribe(
        (data: University[]) => {
          if (State == "") {
            this.searchResults = data;
          }
          else {
            this.searchResults = data;
            this.searchResults = this.searchResults.filter(univ => univ.state == State);
          }
          console.log(this.searchResults);

        },
        error => console.error(error)
      );
    }

  }

    //searchMaxACT(): any {

  //  this.universityData.searchACT(this.searchActInput).subscribe(
  //    (data: University[]) => {
  //      this.actTest = data;
  //    },
  //    error => console.error(error)
  //  );
  //}

  //searchMaxSAT(): any {

  //  this.universityData.searchSAT(this.searchSatInput).subscribe(
  //    (data: University[]) => {
  //      this.satTest = data;
  //    },
  //    error => console.error(error)
  //  );
  //}
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
