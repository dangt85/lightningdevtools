import { browser, by, element } from 'protractor';

export class Ng2AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root #metadata p')).getText();
  }
}
