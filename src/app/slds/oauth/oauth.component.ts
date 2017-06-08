import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SFOrg } from "../../shared/sf-org";

import { OAuth, DataService } from "forcejs";
import { WindowRef } from "../../shared/window.wrapper";
import { SFAPIsService } from "../../shared/sfapis.service";

@Component({
  selector: 'slds-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.sass'],
  host: { '[class]': 'classes' },
  providers: [ WindowRef ]
})
export class OAuthComponent implements OnInit {
  classes = 'slds-col slds-box slds-m-horizontal_large';
  @Input() org: SFOrg;
  @Output() orgChange = new EventEmitter();

  constructor(private windowRef: WindowRef, private sfapi: SFAPIsService) { }

  ngOnInit() {
  }

  connect() {
    const port = window.location.port ? ':' + window.location.port : '';
    const callbackURL = `${window.location.protocol}//${window.location.hostname}${port}/assets/oauthcallback.html`;
    let oauth = OAuth.createInstance("3MVG9FS3IyroMOh5pLo6sS_qz99RhYNFO7hVdpQ_ZaA8qn6pm8drQlAzFnTOSM_RmDzbgsgST90xNiv.4HP8o",
      this.org.loginURL,
      callbackURL);

    oauth.login().then((oauthData) => {
      // login was successful, save oauthData
      this.org.oauth = oauthData;

      // this.orgChange.emit(this.org);
      
      // uses connection instance for future reference
      return Promise.resolve(DataService.createInstance(oauthData, {proxyURL: "https://dev-cors-proxy.herokuapp.com/"}, this.org.name));
    }).then(() => {
      let {instanceURL, accessToken} = this.org.oauth;

      return this.sfapi.describeMetadata({instanceUrl: instanceURL, accessToken: accessToken});
    }).then(data => this.org.data = data)
    .then(() => this.orgChange.emit(this.org));
  }
}
