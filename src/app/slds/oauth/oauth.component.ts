import { Component, OnInit, Input } from '@angular/core';

import { SFOrg } from "../../shared/sf-org";

import { OAuth, DataService } from "forcejs";

@Component({
  selector: 'slds-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.sass']
})
export class OAuthComponent implements OnInit {
  @Input() org: SFOrg;

  constructor() { }

  ngOnInit() {
  }

  connect() {
    let oauth = OAuth.createInstance("3MVG9FS3IyroMOh5pLo6sS_qz99RhYNFO7hVdpQ_ZaA8qn6pm8drQlAzFnTOSM_RmDzbgsgST90xNiv.4HP8o",
      this.org.loginURL,
      "http://localhost:4200/assets/oauthcallback.html");

    oauth.login().then((oauthData) => {
      // login was successful, save oauthData
      this.org.oauth = oauthData;
      
      // uses connection instance for for future reference
      DataService.createInstance(oauthData, {proxyURL: "https://dev-cors-proxy.herokuapp.com/"}, this.org.name);
    }).then(() => {
      let service = DataService.getInstance(this.org);
      service.resources()
        .then(response => {
          console.log(response);
        });
    });
  }
}
