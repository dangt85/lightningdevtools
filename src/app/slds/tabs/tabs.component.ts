import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slds-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {
  @Input() tabs: any;
  selectedTab: any;

  constructor() { }

  ngOnInit() {
    this.selectedTab = this.tabs[0];
  }

  switchTo(tab: any) {
    this.selectedTab = tab;
  }
}
;