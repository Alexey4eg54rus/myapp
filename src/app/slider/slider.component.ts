import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images = [
    '/../../assets/book-1659717_1920.jpg',
    '/../../assets/bulletin-board-3127287_1920.jpg',
    '/../../assets/film-1668918_1920.jpg',
    '/../../assets/action-3598629_1920.jpg',
    '/../../assets/photography-801891_1920.jpg',
    '/../../assets/computer-336628_1280.jpg'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
