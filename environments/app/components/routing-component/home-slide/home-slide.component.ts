import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.css']
})
export class HomeSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function(){
      var $scrollTop=$(window).scrollTop() / 2;
      $('.slide-scroll').css({'background-position-y':$scrollTop+'px'});
    })
  }

}
