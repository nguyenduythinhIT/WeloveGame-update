import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  configUrl = 'https://welovegame.herokuapp.com/signup';

getConfig() {
  return this.http.get(this.configUrl);
}
}   