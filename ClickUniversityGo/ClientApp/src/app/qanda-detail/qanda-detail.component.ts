import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { QandADataService } from '../qanda-data.service';
import { Question, Answer } from '../interfaces/qandA';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-qanda-detail',
  templateUrl: './qanda-detail.component.html',
  styleUrls: ['./qanda-detail.component.scss']
})
export class QandaDetailComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userID: Observable<string>;
  public userName: Observable<string>;
  //questions: Question[];
  q: Question;
  answers: Answer[];

  constructor(private authorizeService: AuthorizeService, private qandAData: QandADataService) { }
  //newUserName: string;
  newEmail: string;
  newDetail: string;
  newQuestionId: number;
  newPosted: Date;
  newUpvotes: number;


  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.authorizeService.getUser().subscribe(user => this.newEmail = user.name);

    this.updateEvents()
  }
  async updateEvents() {
    this.answers = await this.qandAData.getAnswers()
  }

  async addNewAnswer(q: Question) {
    await this.qandAData.addNewAnswer({ email: this.newEmail, detail: this.newDetail, questionId: this.newQuestionId, posted: this.newPosted, upvotes: this.newUpvotes } as Answer)

    this.newDetail = ""
    this.newQuestionId = q.id
    this.newPosted = null
    this.newUpvotes = null
  }
}
