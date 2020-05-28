import { Component, OnInit, Input } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { UniversitiesDataService } from '../universities-data.service';
import { FavoritesDataService } from '../favorites-data.service';
import { University } from '../interfaces/university';
import { JoinedItem , Favorite} from '../interfaces/favorite';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.scss']
})
/** university-detail component*/
export class UniversityDetailComponent implements OnInit{
  public isAuthenticated: Observable<boolean>;
  /** university-detail ctor */

  university: University;
  @Input() ref: string;
  @Input() id: number;



  constructor(private authorizeService: AuthorizeService, private universityData: UniversitiesDataService, public route: ActivatedRoute) { }
  newEmail: string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getUniversity(this.id);
    })

    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.authorizeService.getUser().subscribe(user => this.newEmail = user.name);
  }

  getUniversity(id: number): Subscription {
    return this.universityData.getUniversity(id).subscribe(
      (data: University) => this.university = { ...data },
      error => console.error(error))
    console.log("Name: " + this.university.universityName)
  }

  async addFavoriteUniversity() {
    await this.universityData.postFavoriteUniversity({ email: this.newEmail, universityId: this.id })
  }


}
