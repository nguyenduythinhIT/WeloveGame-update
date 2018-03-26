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
import { GameListContentComponent } from './components/routing-component/game-list-content/game-list-content.component';
import { HttpClientModule } from '@angular/common/http';
import { GameListContentService } from './components/routing-component/game-list-content/game-list-content.service';
import { GameContentComponent } from './components/game-content/game-content.component';


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
    GameListContentComponent,
    GameContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GameListContentService
  ],
  bootstrap: [
    AppComponent,
    HomeComponent,
    GameListComponent,
  ]
})
export class AppModule { }
