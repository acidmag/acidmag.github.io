import { browser, element, by } from 'protractor';

export class Acidmag.Github.IoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('acid-root h1')).getText();
  }
}
