import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  thinh: string = "./assets/thinh.jpg";
  quy: string = "./assets/quy.jpg";
  constructor() { 
  }



  ngOnInit() {
    $(".admin-thinh").click(function(){
      $(".admin-column-1").slideToggle("slow");
    })
    $(".admin-quy").click(function(){
      $(".admin-column-2").slideToggle("slow");
    })
   
   
  }

}
