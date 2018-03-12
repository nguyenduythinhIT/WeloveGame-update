import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navi-bar',
  templateUrl: './navi-bar.component.html',
  styleUrls: ['./navi-bar.component.css']
})
export class NaviBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      resize_menu();
    })
    $(window).resize(function(){
      resize_menu();
    })
    //----------------event
    $('.menubtn').click(function(){
      $('.navi-bar > li:nth-child(n+3)').slideToggle('fast');
    })
    $('.navi-bar > li:nth-child(n+3)').click(function(){
      if($(window).width() <1000)
        $('.navi-bar > li:nth-child(n+3)').slideToggle('fast');
    })
    $('#template_content,#template_foot').click(function(){
      if($(window).width() <1000)
        $('.navi-bar > li:nth-child(n+3)').hide();
    })
    //---------------function

    function resize_menu(){
      var $width = $(window).width();
      if($width < 1000){
        $('.navi-bar > li:nth-child(n+3)').hide();
      }
      else{
        $('.navi-bar > li:nth-child(n+3)').show();
      }
    }
  }

}
