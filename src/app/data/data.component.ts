import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass']
})
export class DataComponent implements OnInit {
  myTabs: any;

  constructor() { }

  ngOnInit() {
    this.myTabs = [
      {
        title: "Details",
        isActive: true
      },
      {
        title: "Collaboration",
        isActive: false
      }
    ];
  }

}
