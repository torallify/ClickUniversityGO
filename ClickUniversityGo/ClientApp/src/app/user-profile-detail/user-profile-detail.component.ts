import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { UserProfileDataService } from '../user-profile-data.service';
import { UserProfile } from '../interfaces/userProfile';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile-detail',
  templateUrl: './user-profile-detail.component.html',
  styleUrls: ['./user-profile-detail.component.scss']
})
/** user-profile-detail component*/

export class UserProfileDetailComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  userProfiles: UserProfile[];

  constructor(private authorizeService: AuthorizeService, private userProfileData: UserProfileDataService) { }
  newEmail: string;

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
   
    this.authorizeService.getUser().subscribe(user => this.newEmail = user.name);
    this.getUsers();


  }
  async getUsers() {
    this.userProfiles = await this.userProfileData.getUserProfiles(this.newEmail)
  }
}
