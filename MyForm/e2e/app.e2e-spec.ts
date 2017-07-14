import { Homework14Page } from './app.po';

describe('homework14 App', () => {
  let page: Homework14Page;

  beforeEach(() => {
    page = new Homework14Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
