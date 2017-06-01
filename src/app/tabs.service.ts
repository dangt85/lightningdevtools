import { Injectable } from '@angular/core';

import { AppTab } from "./shared";
import { tabs } from "./metadata/mock-metadata-tabs";

@Injectable()
export class TabsService {

  constructor() { }

  getTabs(): Promise<AppTab[]> {
    return Promise.resolve(tabs);
  }
}
