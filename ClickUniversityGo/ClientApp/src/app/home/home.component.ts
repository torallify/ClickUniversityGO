import { Component } from '@angular/core';
import { UniversitiesDataService } from '../universities-data.service';
import { FavoritesDataService } from '../favorites-data.service';
import { University } from '../interfaces/university';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  universities: University[];
  randomUniversity1: number;
  randomUniversity2: number;
  randomUniversity3: number;
  randomUniversity4: number;
  randomUniversity5: number;
  

  constructor(private universityData: UniversitiesDataService,
    private favoriteData: FavoritesDataService) { }

  ngOnInit() {
    this.get();
    this.getRandomNumber1(1, 1415);
    this.getRandomNumber2(1, 1415);
    this.getRandomNumber3(1, 1415);
    this.getRandomNumber4(1, 1415);
    this.getRandomNumber5(1, 1415);
  }

  get() {
    this.universityData.getAllUniversities().subscribe(
      (data: University[]) => {
        this.universities = data;
      },
      error => console.error(error)
    );
  }

  //getRandomNumber() {
  //  const randomIndex = Math.floor(Math.random() * this.universities.length);
  //  const randomUniversity = this.universities[randomIndex];
  //  this.randomUniversities.push(randomUniversity);
  //}

  getRandomUniversity() {
  var unique = true;
  var num = Math.floor(Math.random() * this.universities.length - 5);
  var university = this.universities.splice(num, 1);
  this.universities.push(name);
  }

  getRandomNumber1(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    this.randomUniversity1 = result;
  }

  getRandomNumber2(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    this.randomUniversity2 = result;
  }

  getRandomNumber3(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    this.randomUniversity3 = result;
  }

  getRandomNumber4(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    this.randomUniversity4 = result;
  }

  getRandomNumber5(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    this.randomUniversity5 = result;
  }

}
