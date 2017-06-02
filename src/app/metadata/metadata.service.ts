import { Injectable } from '@angular/core';

import { OAuth, DataService } from "forcejs";

@Injectable()
export class MetadataService {

  service: any;

  constructor() {
  }

  prettify(object) {
    let prettyobject: any = {
      id: object.Id,
      email: object.Email,
      name: object.Name
    };
    return prettyobject;
  }

  findAll() {
    this.service = DataService.getInstance();
    console.log(this.service);
    return this.service.query(`SELECT id,
                                name,
                                email
                        FROM Contact`)
        .then(response => response.records.map(this.prettify));
  }
}
