import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-lightning-tabs',
  templateUrl: './lightning-tabs.component.html',
  styleUrls: ['./lightning-tabs.component.sass']
})
export class LightningTabsComponent implements OnInit {
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