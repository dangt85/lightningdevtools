import { Ng2AppPage } from './app.po';

describe('ng2-app App', () => {
  let page: Ng2AppPage;

  beforeEach(() => {
    page = new Ng2AppPage();
  });

  it('should display message saying "metadata works"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('metadata works!');
  });
});
