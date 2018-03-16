import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../config/config.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(private configservice:ConfigService) {
    this.test();
  }

  ngOnInit() {
  }
  test(){
    this.configservice.getConfig()
		.subscribe(data =>     
		console.log(data));
  }
}
