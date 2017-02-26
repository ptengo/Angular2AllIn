import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { customTransition } from '../../animations/transition.animation';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css'],
  animations: [customTransition()]
})
export class DatesComponent implements OnInit {
  dates: Array<any>;
  showChat = false;
  constructor(private http:Http) {
  
    this.http.get('./datahome.json')
      .map(response => response.json().dates)
      .subscribe(res => this.dates = res);

  }

  ngOnInit() {
  }

  chatMood(event) {
    this.showChat = event;
  }

}
