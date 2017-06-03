import { Injectable } from '@angular/core';

import { OAuth, DataService } from "forcejs";

@Injectable()
export class MetadataService {

  constructor() {}

  findAll() {
    let service = DataService.getInstance();
    return service.query(`SELECT id,name,email FROM Contact`)
      .then(response => {
        return response.records.map(this.prettify);
      });
  }

  private prettify(object) {
    let prettyobject: any = {
      id: object.Id,
      email: object.Email,
      name: object.Name
    };
    return prettyobject;
  }
}
