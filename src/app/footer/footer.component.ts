import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emailIcon:string = '/../../assets/email.png';
  telegramIcon:string = '/../../assets/telegram.png';
  whatsappIcon:string = '/../../assets/whatsapp.png';


}
