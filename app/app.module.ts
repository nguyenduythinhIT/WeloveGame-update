import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/routing/about-us/about-us.component';
import { GameListComponent } from './components/routing/game-list/game-list.component';
import { LoginComponent } from './components/routing/login/login.component';
import { NaviBarComponent } from './components/navi-bar/navi-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/routing/home/home.component';
import { ContactComponent } from './components/routing/contact/contact.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SignupComponent } from './components/routing/signup/signup.component';
import { HomeSlideComponent } from './components/routing-component/home-slide/home-slide.component';
import { GameListBarComponent } from './components/routing-component/game-list-bar/game-list-bar.component';
import { GameListContentComponent } from './components/routing-component/game-list-content/game-list-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    GameListComponent,
    LoginComponent,
    NaviBarComponent,
    FooterComponent,
    ContactComponent,
    SearchBarComponent,
    SignupComponent,
    HomeSlideComponent,
    GameListBarComponent,
    GameListContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HomeComponent,
    GameListComponent,
  ]
})
export class AppModule { }
