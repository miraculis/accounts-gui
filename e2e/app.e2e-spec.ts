import { AccountsGuiPage } from './app.po';

describe('accounts-gui App', function() {
  let page: AccountsGuiPage;

  beforeEach(() => {
    page = new AccountsGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
