import { Component, OnInit } from '@angular/core';

import { MetadataService } from './metadata.service'

import { AppTab, MenuItem } from '../shared';
import { TabsService } from "../shared/tabs.service";

import { SFOrg } from "../shared/sf-org";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.sass'],
  providers: [ TabsService, MetadataService ]
})
export class MetadataComponent implements OnInit {
  tabs: AppTab[];
  selectedTab: AppTab;
  selectedItem: MenuItem;

  org1: SFOrg = new SFOrg('source');
  org2: SFOrg = new SFOrg('target');

  constructor(private tabsService: TabsService, private metadataService: MetadataService) { }

  ngOnInit() {
    this.tabsService.getTabs('metadata').then((tabs) => {
      this.tabs = tabs;
      this.selectedTab = tabs[0];
    });
  }

  goto(tab: AppTab, menuItem?: MenuItem) {
    this.selectedTab = tab;
    this.selectedItem = menuItem;
  }
}
