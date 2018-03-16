import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/routing/about-us/about-us.component';
import { GameListComponent } from './components/routing/game-list/game-list.component';
import { NaviBarComponent } from './components/navi-bar/navi-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/routing/home/home.component';
import { ContactComponent } from './components/routing/contact/contact.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeSlideComponent } from './components/routing-component/home-slide/home-slide.component';
import { ConfigService } from './config/config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    GameListComponent,
    NaviBarComponent,
    FooterComponent,
    ContactComponent,
    SearchBarComponent,
    HomeSlideComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [
    AppComponent,
    HomeComponent,
    GameListComponent
  ]
})
export class AppModule { }
