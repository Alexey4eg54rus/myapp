import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { Sites } from './sites';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  title:string = 'Some examples';

  sites = Sites;

  constructor() { }

  ngOnInit(): void {
  }

}
