import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { QandADataService} from '../qanda-data.service';
import {Question, Answer } from '../interfaces/qandA';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-qanda',
  templateUrl: './qanda.component.html',
  styleUrls: ['./qanda.component.scss']
})
export class QandaComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userID: Observable<string>;
  public userName: Observable<string>;

  constructor(private authorizeService: AuthorizeService, private qandAData: QandADataService) { }
  //newUserName: string;
  newEmail: string;
  newTitle: string;
  newDetail: string;
  newPosted: Date;
  newCategory: string;
  newTags: string;
  newStatus: number;


  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    //this.userID = this.authorizeService.getAccessToken();

    //this.userName = this.authorizeService.getUser().pipe(
    // map(u => u && u.name),
    // tap(u => this.newUserName = u))
    //;
    this.authorizeService.getUser().subscribe(user => this.newEmail = user.name);

    //this.userID.subscribe(id => { console.log({ id }) });

  }
  async addNewQuestion() {
    await this.qandAData.addNewQuestion({ email: this.newEmail, title: this.newTitle, detail: this.newDetail, posted: this.newPosted, category: this.newCategory, tags: this.newTags, status: this.newStatus } as Question)

    this.newTitle = ""
    this.newDetail = ""
    this.newPosted = null
    this.newCategory = ""
    this.newTags = ""
    this.newStatus = null
  }
}
