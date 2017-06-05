import { Component, OnInit } from '@angular/core';

import { MetadataService } from './metadata.service'

import { AppTab, MenuItem } from '../shared';
import { TabsService } from "../shared/tabs.service";

import { OAuth, DataService } from "forcejs";

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

  org1: any;
  org2: any;

  constructor(private tabsService: TabsService, private metadataService: MetadataService) { }

  ngOnInit() {
    this.tabsService.getTabs('metadata').then((tabs) => {
      this.tabs = tabs;
      this.selectedTab = tabs[0];
    });
  }

  connect(org: string) {
    let oauth = OAuth.createInstance("3MVG9FS3IyroMOh5pLo6sS_qz99RhYNFO7hVdpQ_ZaA8qn6pm8drQlAzFnTOSM_RmDzbgsgST90xNiv.4HP8o",
      "https://cwc-dgtraining--sfdx.cs9.my.salesforce.com",
      "http://localhost:4200/assets/oauthcallback.html");

    oauth.login().then((oauthData) => {
      // login was successful, save oauthData
      if(org === 'org1')
        this.org1 = oauthData;
      else if(org === 'org2')
        this.org2 = oauthData;
      
      console.log(oauthData);
      // uses connection instance for for future reference
      DataService.createInstance(oauthData, {proxyURL: "https://dev-cors-proxy.herokuapp.com/"}, org);
    }).then(() => {
      let service = DataService.getInstance(org);
      service.resources()
        .then(response => {
          console.log(response);
        });
    });
  }

  findAll() {
    let oauth = OAuth.createInstance("3MVG9FS3IyroMOh5pLo6sS_qz99RhYNFO7hVdpQ_ZaA8qn6pm8drQlAzFnTOSM_RmDzbgsgST90xNiv.4HP8o",
      "https://cwc-dgtraining--sfdx.cs9.my.salesforce.com",
      "http://localhost:4200/assets/oauthcallback.html");
    oauth.login().then((oauthData) => {
      DataService.createInstance(oauthData, {proxyURL: "https://dev-cors-proxy.herokuapp.com/"});
    }).then(() => {
      this.metadataService.findAll()
        .then(data => {
          // this.contacts = data;
        })
        .catch(err => alert(err));
    });
  }

  goto(tab: AppTab, menuItem?: MenuItem) {
    this.selectedTab = tab;
    this.selectedItem = menuItem;
  }
}
