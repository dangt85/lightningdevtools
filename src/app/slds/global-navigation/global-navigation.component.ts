import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AppTab, MenuItem } from '../../shared';

@Component({
  selector: 'slds-global-navigation',
  templateUrl: './global-navigation.component.html',
  styleUrls: ['./global-navigation.component.sass']
})
export class GlobalNavigationComponent implements OnInit {
  @Input() tabs: AppTab[];
  @Input() selectedTab: AppTab;
  @Output() selectedTabChange = new EventEmitter();
  @Input() selectedItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

  goto(tab: AppTab, menuItem?: MenuItem) {
    this.selectedTab = tab;
    this.selectedTabChange.emit(this.selectedTab);
    this.selectedItem = menuItem;
  }
}
