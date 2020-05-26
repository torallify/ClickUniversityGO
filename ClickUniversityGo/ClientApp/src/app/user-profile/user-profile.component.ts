import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { UserProfileDataService } from '../user-profile-data.service';
import { UserProfile } from '../interfaces/userProfile';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userID: Observable<string>;
  public userName: Observable<string>;

  constructor(private authorizeService: AuthorizeService, private userProfileData: UserProfileDataService) { }
  newUserName: string;
  newEmail: string;
  newHomeState: string;
  newACTScore: number;
  newSATScore: number;
  newDesiredState: string;
  

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    //this.userID = this.authorizeService.getAccessToken();

    //this.userName = this.authorizeService.getUser().pipe(
    // map(u => u && u.name),
    // tap(u => this.newUserName = u))
    //;

    //this.userID.subscribe(id => { console.log({ id }) });

  }
  async addNewUser() {
    await this.userProfileData.addNewUser({userName: this.newUserName, email: this.newEmail, homeState: this.newHomeState, aCTScore: this.newACTScore, sATScore: this.newSATScore, desiredState: this.newDesiredState } as UserProfile)
    this.newUserName = ""
    this.newEmail = ""
    this.newHomeState = ""
    this.newACTScore = null
    this.newSATScore = null
    this.newDesiredState = ""
  }
}
