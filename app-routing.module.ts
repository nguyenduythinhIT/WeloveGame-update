import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/router/home/home.component';
import { ContactComponent } from './components/router/contact/contact.component';
import { LoginComponent } from './components/router/login/login.component';
import { GameListComponent } from './components/router/game-list/game-list.component';
import { GameComponent } from './components/router/game/game.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'gamelist',
    component:GameListComponent
  },
  {
    path:'gamelist/:name',
    component:GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
