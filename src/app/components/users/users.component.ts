import { Component, OnInit } from '@angular/core';
//Servei per interactuar amb la API d'usuaris
import { UsersService } from '../../services/users.service';
import { customTransition } from '../../animations/transition.animation';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [customTransition()]
})
export class UsersComponent implements OnInit {

	users: any = [];
 	showChat = false;
  	constructor(private usersService: UsersService ) { }

  	ngOnInit() {
  		this.usersService.getAllUsers().subscribe(users => {
  			this.users = users;
  		});
  	}


	chatMood(event) {
    this.showChat = event;
  }

}
