import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GameListContentService{
    public serverURL = "http://shopthoitrangonline.tk/server.php?get=game-list";
    public serverURL2 = "http://localhost/server.php?get=game-list";
  

    constructor (public http:HttpClient){}
    getConfig()
    {
      return this.http.get(this.serverURL2);
    }

  
}