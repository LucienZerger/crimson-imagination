import { CrimsonImaginationPage } from './app.po';

describe('crimson-imagination App', () => {
  let page: CrimsonImaginationPage;

  beforeEach(() => {
    page = new CrimsonImaginationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
