import { Component, OnInit, Input } from '@angular/core';
import { UniversitiesDataService } from '../universities-data.service';
import { FavoritesDataService } from '../favorites-data.service';
import { University } from '../interfaces/university';
import { JoinedItem } from '../interfaces/favorite';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.scss']
})
/** university-detail component*/
export class UniversityDetailComponent {
  /** university-detail ctor */

  university: University;
  @Input() ref: string;
  @Input() id: number;
  route: any;


  constructor(private universityData: UniversitiesDataService,
    private favoriteData: FavoritesDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getUniversity(this.id);
    })
  }

  getUniversity(id: number): Subscription {
    return this.universityData.getUniversity(id).subscribe(
      (data: University) => this.university = { ...data },
      error => console.error(error))
    console.log("Name: " + this.university.universityName)
      }



}
