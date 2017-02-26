import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
//Component creat amb ng generate component users
import { UsersComponent } from './components/users/users.component';
//Servei per interactuar amb la API d'usuaris
import { UsersService } from './services/users.service';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { ChatComponent } from './components/chat/chat.component';
import { DatesComponent } from './components/dates/dates.component';

//Definim les routes de la nostra app
const ROUTES = [
//Si es visita el root redireccionar a /users --CANVIAR EN UN FUTUR PER EL LOGIN BLABLABLA
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ToolbarComponent,
    DashboardComponent,
    PreferencesComponent,
    ChatComponent,
    DatesComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
