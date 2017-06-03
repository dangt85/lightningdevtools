import { Component, OnInit } from '@angular/core';

import { AppTab } from '../shared';
import { TabsService } from "../shared/tabs.service";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.sass'],
  providers: [ TabsService ]
})
export class MetadataComponent implements OnInit {
  tabs: AppTab[];
  selectedTab: AppTab;

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    this.tabsService.getTabs('metadata').then((tabs) => {
      this.tabs = tabs;
      this.selectedTab = tabs[0];
    });
  }

  goto(tab: AppTab) {
    this.selectedTab = tab;
  }
}
