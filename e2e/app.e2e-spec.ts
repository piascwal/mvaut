import { MaisonVautoursPage } from './app.po';

describe('maison-vautours App', () => {
  let page: MaisonVautoursPage;

  beforeEach(() => {
    page = new MaisonVautoursPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
