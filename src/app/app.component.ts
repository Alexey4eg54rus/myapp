import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';

  titleText:string = 'My personal resume';

  ngOnInit() {
    setInterval(() => this.titleText = 'Created with Angular!', 6000);
  }
}
