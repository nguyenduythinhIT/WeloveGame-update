import { Component, OnInit } from '@angular/core';
// import { GameListContentService } from '../routing-component/game-list-content/game-list-content.service';
import { ActivatedRoute } from '@angular/router';

import { GameContentService } from './game-content.service';

@Component({
  selector: 'app-game-content',
  templateUrl: './game-content.component.html',
  styleUrls: ['./game-content.component.css']
})
export class GameContentComponent implements OnInit {

  constructor(
    public gameService: GameContentService,
    private route: ActivatedRoute
  ) {
    this.getInforGameByID();
  }

  ngOnInit() {
  }
  
  game: any;
  gameId = this.route.snapshot.params['id']; 

  getInforGameByID()
  {
    this.getGameById(this.gameId).subscribe(res=>{
      this.game = res[0];
    });
  }
  getGameById(param) {
    return this.gameService.getGamebyId(param);
  }

}
