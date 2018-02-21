import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/router/home/home.component';
import { NaviBarComponent } from './components/navi-bar/navi-bar.component';
import { ContactComponent } from './components/router/contact/contact.component';
import { LoginComponent } from './components/router/login/login.component';
import { GameListComponent } from './components/router/game-list/game-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FootComponent } from './components/foot/foot.component';
import { GameComponent } from './components/router/game/game.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaviBarComponent,
    ContactComponent,
    LoginComponent,
    GameListComponent,
    SearchBarComponent,
    FootComponent,
    GameComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
