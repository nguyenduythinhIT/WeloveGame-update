import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameContentService {
    public serverURL = "http://shopthoitrangonline.tk/server.php?get=game-list";
    public serverURL2 = "http://localhost/server.php?get=game&id=";

    constructor(public http: HttpClient) { }
    getConfig() {
        return this.http.get(this.serverURL2);
    }

    getGamebyId(param) {
         return this.http.get(this.serverURL2 + param);
    }
}