import { Component, OnInit } from '@angular/core';
import { GameListContentService } from './game-list-content.service';


@Component({
  selector: 'app-game-list-content',
  templateUrl: './game-list-content.component.html',
  styleUrls: ['./game-list-content.component.css']
})
export class GameListContentComponent implements OnInit {

constructor(public gamelistservice:GameListContentService) { 
  this.showConfig();
  }

  ngOnInit() {
  }
 gamelist:any[];
 notpaid = "Free";
 paid = "Paid";
 poster_icon="assets/poster_icon.png";
 game_name_icon="assets/game_name_icon.png";
 free_paid_icon="assets/free_paid_icon.png";
  showConfig() {
    this.gamelistservice.getConfig()
     .subscribe((data: any[]) => {
          this.gamelist = data;
          console.log(this.gamelist);
      }
    );
  }


}
