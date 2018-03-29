import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameContentService {
    public serverURL = "http://shopthoitrangonline.tk/server.php?get=game&id=";
    public serverURL2 = "http://localhost/server.php?get=game&id=";
    public serverURL3 = "http://shopthoitrangonline.tk/server.php?get=link&id_game=";
    constructor(public http: HttpClient) { }
    getConfig() {
        return this.http.get(this.serverURL);
    }

    getGamebyId(param) {
         return this.http.get(this.serverURL + param);
    }
    getLinkgamebyId(param){
        return this.http.get(this.serverURL3 + param);
    }
    
}