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
 imglist:any[];
  imgsrc = "../../../../assets/";
  showConfig() {
    this.gamelistservice.getConfig()
     .subscribe((data: any[]) => {
        for(var i=0 ; i<data.length ;i++)
        {
          this.gamelist = data;
          this.imglist = this.gamelist[i].id;
          console.log(this.gamelist[i]);
          this.imgsrc = "../../../../assets/";
          this.imgsrc += this.imglist +".jpg";
          alert(this.imgsrc);
        }
      }
    );
  }


}
