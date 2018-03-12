import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  thinh:string = "./assets/thinh.jpg";
  quy:string = "./assets/quy.jpg";
  constructor() { }

  ngOnInit() {
      
  }

}
