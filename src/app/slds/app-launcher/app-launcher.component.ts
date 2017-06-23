import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from "@angular/router";

import { slideInDownAnimation }   from '../../animations';

@Component({
  selector: 'slds-app-launcher',
  templateUrl: './app-launcher.component.html',
  styleUrls: ['./app-launcher.component.sass'],
  animations: [ slideInDownAnimation ]
})
export class AppLauncherComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.closePopup();
  }

  gotoApp(appLink: string) {
    this.router.navigate([appLink]).then(() => this.closePopup());
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
