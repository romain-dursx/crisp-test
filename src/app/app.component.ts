import { Component } from '@angular/core';
import {Crisp} from "crisp-sdk-web";
import {CRISP_TOKEN} from "./crisp-token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    Crisp.configure(CRISP_TOKEN, {
      autoload: false,
    });
    Crisp.load();
    Crisp.chat.close();
    Crisp.chat.hide();
  }
}
