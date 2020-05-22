import { Component } from '@angular/core';
import { UniversitiesDataService } from '../universities-data.service';
import { FavoritesDataService } from '../favorites-data.service';
import { University } from '../interfaces/university';
import { JoinedItem } from '../interfaces/favorite';

@Component({
    selector: 'app-university-detail',
    templateUrl: './university-detail.component.html',
    styleUrls: ['./university-detail.component.scss']
})
/** university-detail component*/
export class UniversityDetailComponent {
/** university-detail ctor */

  university: University;

  constructor(private universityData: UniversitiesDataService,
    private favoriteData: FavoritesDataService) { }

//  ngOnInit() {
//    this.route.params.subscribe(params => {
//      this.id = +params['id'];
//    })
//  }

//  getUniversity(id: number) {
//    this.universityData.getUniversity(id).subscribe(
//      (data: University) => {
//        this.getUniversity = data;
//      },
//      error => console.error(error)
//    );
//  }
}
