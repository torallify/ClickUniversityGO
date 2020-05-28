import { Component, OnInit , Input} from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { QandADataService } from '../qanda-data.service';
import { Question, Answer } from '../interfaces/qandA';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
  selector: 'app-qanda-detail',
  templateUrl: './qanda-detail.component.html',
  styleUrls: ['./qanda-detail.component.scss']
})
export class QandaDetailComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;

  //questions: Question[];
  question: Question;
  @Input() ref: string;
  @Input() id: number;
  @Input() answer: Answer;
  answers: Answer[];
  updateInput: string;
  showEdit: boolean;
  updateUpVotes: number;

  constructor(private authorizeService: AuthorizeService, public route: ActivatedRoute, private qandAData: QandADataService) { }
  //newUserName: string;
  newEmail: string;
  newDetail: string;
  newPosted: Date;
  newUpvotes: number;


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getQuestionByID(this.id);
      this.showEdit = true;
    })

    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.authorizeService.getUser().subscribe(user => this.newEmail = user.name);

    this.updateEvents();
    this.getAnswers();
  }
  async updateEvents() {
    this.answers = await this.qandAData.getAnswers()
  }
  getQuestionByID(id: number): Subscription {
    return this.qandAData.getQuestionByID(id).subscribe(
      (data: Question) => this.question = { ...data },
      error => console.error(error))
    console.log("Name: " + this.question.title)
  }

  toggleEdit = function () {
    this.showEdit = !this.showEdit;
  }
  async getAnswers() {
    this.answers = await this.qandAData.getAnswerByID(this.id)
    this.updateEvents()
  }

  async addNewAnswer() {
    await this.qandAData.addNewAnswer({ email: this.newEmail, detail: this.newDetail, questionId: this.id} as Answer)
    this.updateEvents()
    this.newDetail = ""
    this.newPosted = null
    this.newUpvotes = null
    await this.getAnswers()
  }

  async editAnswer(answerId: number) {
    await this.qandAData.updateAnswer({ detail: this.updateInput, id: answerId })
    this.updateInput = ""
    this.updateEvents()
    await this.getAnswers()
  }

  async upVote(answer: Answer) {
    await this.qandAData.upVoteAnswer(answer)
    this.updateEvents()
    await this.getAnswers()
  }

  async downVote(answer: Answer) {
    await this.qandAData.downVoteAnswer(answer)
    this.updateEvents()
    await this.getAnswers()
  }
}
