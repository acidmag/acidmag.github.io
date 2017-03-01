import { Acidmag.Github.IoPage } from './app.po';

describe('acidmag.github.io App', () => {
  let page: Acidmag.Github.IoPage;

  beforeEach(() => {
    page = new Acidmag.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
