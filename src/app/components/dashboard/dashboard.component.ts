import { Component, OnInit, trigger, transition, style, animate } from '@angular/core';
import {Http} from '@angular/http';
import { customTransition } from '../../animations/transition.animation';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [customTransition()]
})
export class DashboardComponent implements OnInit {

  chats: Array<any>;
  showChat = false;

  constructor(private http:Http) {
    
    this.http.get('./datahome.json')
      .map(response => response.json().dates)
      .subscribe(res => this.chats = res);

  }
  ngOnInit() {
  }

  /*toggleChat() {
    this.showChat = !this.showChat;
  }*/

  chatMood(event) {
    this.showChat = event;
  }

}
