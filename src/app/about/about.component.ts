import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name:string = 'My name is';
  birthDate:string = 'Birhtdate';
  age:string = 'I am...';
  education:string = 'Education';

  myName() {
    this.name = 'Alexey Shevin';
  }
  myBirthdate() {
    this.birthDate = '08.02.92';
  }
  myAge() {
    this.age = '29 years old';
  }
  myEducation() {
    this.education = 'Siberian State University Of Geosystems ang Technologies';
  }

  constructor() { }

  ngOnInit(): void {
  }

}