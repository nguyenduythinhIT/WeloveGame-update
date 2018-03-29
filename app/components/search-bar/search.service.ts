import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
    public serverURL = "http://localhost/server.php?search-bar="
    constructor(public http: HttpClient) { }
    searchConfig(param) {
        return this.http.get(this.serverURL + param );
    }
    
}