import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/routing/home/home.component';
import { AboutUsComponent } from './components/routing/about-us/about-us.component';
import { GameListComponent } from './components/routing/game-list/game-list.component';
import { ContactComponent } from './components/routing/contact/contact.component';
import { GameContentComponent } from './components/game-content/game-content.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'game-list',
    component:GameListComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'game-content/:name/:id',
    component:GameContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
