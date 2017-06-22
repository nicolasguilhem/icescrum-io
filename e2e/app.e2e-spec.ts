import { IcescrumIoPage } from './app.po';

describe('icescrum-io App', () => {
  let page: IcescrumIoPage;

  beforeEach(() => {
    page = new IcescrumIoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
