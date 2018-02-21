import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function(){
      scrollSlide();
    })
    function scrollSlide(){
      var $scroll=$(window).scrollTop() * 0.3;
      $('.slide-scroll').css({'background-position-y':$scroll+'px'});
    }
  }

}
