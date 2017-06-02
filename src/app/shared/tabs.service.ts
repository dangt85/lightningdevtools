import { Injectable } from '@angular/core';

import { AppTab } from "./index";
import { tabs as mdtabs } from "../metadata/mock-metadata-tabs";
import { tabs as dtabs } from "../data/mock-data-tabs";

@Injectable()
export class TabsService {

  constructor() { }

  getTabs(app: string): Promise<AppTab[]> {
    switch (app) {
      case 'metadata':
        return Promise.resolve(mdtabs);
      
      case 'data':
        return Promise.resolve(dtabs);
      
      default:
        return Promise.resolve([]);
    }
  }
}
