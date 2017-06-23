import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SFAPIsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  private url = 'http://localhost:3000';

  constructor(private http: Http) { }

  describeMetadata(oauthData: any): Promise<any[]> {
    return this.http.post(`${this.url}/describeMetadata`, oauthData, {headers: this.headers})
      .toPromise()
      .then(response => response.json().metadataObjects as any[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}