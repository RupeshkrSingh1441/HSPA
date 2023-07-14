import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Property-card',
  templateUrl: './Property-card.component.html',
  styleUrls: ['./Property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  Property:any ={
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  }

  constructor() { }

  ngOnInit() {
  }

}
