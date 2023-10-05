import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Crisp} from "crisp-sdk-web";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  crispUnreadCount: number = 0;
  crispUnreadCount2: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.crispUnreadCount = Crisp.chat.unreadCount();
    console.log(this.crispUnreadCount);
    this.crispUnreadCount2 = $crisp.get("chat:unread:count");
    console.log(this.crispUnreadCount2);

    Crisp.message.onMessageReceived((data: any) => {
      console.log(data);
      this.crispUnreadCount = Crisp.chat.unreadCount();
    });
  }

  onLogout() {
    this.router.navigate(['/']);
    Crisp.setTokenId('00000000-0000-0000-0000-000000000000');
    Crisp.session.reset(false);
    Crisp.chat.close();
    Crisp.chat.hide();
  }

  toggleCrispSupport(): void {
    if (Crisp.chat.isVisible()) {
      Crisp.chat.close();
      Crisp.chat.hide();
    } else {
      Crisp.chat.open();
      Crisp.chat.show();
      this.crispUnreadCount = 0;
    }
  }

}
