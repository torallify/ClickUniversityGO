import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question, Answer } from './interfaces/qandA';

@Injectable()
export class QandADataService {
  constructor(private http: HttpClient) {

  }
  async getQuestions() {
    return this.http.get<Question[]>('/api/QandA').toPromise();
  }
  async getAnswers() {
    return this.http.get<Answer[]>('/api/Answers').toPromise();
  }
  async addNewQuestion(question: Partial<Question>) {

    return this.http.post<number>('/api/QandA', question).toPromise();
  }
  async addNewAnswer(answer: Partial<Answer>) {

    return this.http.post<number>('/api/Answer', answer).toPromise();
  }
  
}
