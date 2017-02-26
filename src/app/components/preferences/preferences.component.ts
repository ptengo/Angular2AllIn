import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  pics: Array<any>;


  constructor(private http:Http) {
    
    this.http.get('./datapreferences.json')
      .map(response => response.json().preferences)
      .subscribe(res => this.pics = res);

  }
  ngOnInit() {
  }

}
