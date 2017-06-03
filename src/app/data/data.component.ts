import { Component, OnInit } from '@angular/core';

import { AppTab } from '../shared';
import { TabsService } from "../shared/tabs.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.sass'],
  providers: [ TabsService ]
})
export class DataComponent implements OnInit {
  tabs: AppTab[];
  selectedTab: AppTab;

  myTabs: any;

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    this.myTabs = [
      {
        title: "Details"
      },
      {
        title: "Collaboration"
      }
    ];

    this.tabsService.getTabs('data').then((tabs) => {
      this.tabs = tabs;
      this.selectedTab = tabs[0];
    });
  }

  goto(tab: AppTab) {
    this.selectedTab = tab;
  }
}
