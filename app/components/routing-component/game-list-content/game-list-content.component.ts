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
  showConfig() {
    this.gamelistservice.getConfig()
     .subscribe((data: any[]) => {
          this.gamelist = data;
          console.log(this.gamelist);
      }
    );
  }


}
