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
	name: string;
  	constructor(private usersService: UsersService ) { }

  	ngOnInit() {
  		this.usersService.getAllUsers().subscribe(users => {
  			this.users = users;
  		});
  	}


	chatMood(event) {
    this.showChat = event;
		//this.name = event;
		this.name = event.name;
		console.log(this.name);
		console.log(event);
  }

	setName(userName: string) {
		this.name = userName;
	}

}
