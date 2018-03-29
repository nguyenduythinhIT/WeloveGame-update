import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';
import * as $  from "jquery";
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(public searchService: SearchService) { 
    this.getRes();
   }
  value="";
  ngOnInit() {
    $("#searchBtn").click(function(){
     this.value=$("#inputValue").val();
     console.log(this.value)
    })
  }
  resultsearch:any;
  getRes(){
    this.getValueSearch(this.value).subscribe(res=>{
      console.log(res);
    });
  }
  getValueSearch(param) {
    return this.searchService.searchConfig(param);
  }
}
