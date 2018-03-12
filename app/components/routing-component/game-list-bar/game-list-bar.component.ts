import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list-bar',
  templateUrl: './game-list-bar.component.html',
  styleUrls: ['./game-list-bar.component.css']
})
export class GameListBarComponent implements OnInit {

  constructor() { }
  game=[
    {1:'a'}
  ]
  ngOnInit() {
  }

}
