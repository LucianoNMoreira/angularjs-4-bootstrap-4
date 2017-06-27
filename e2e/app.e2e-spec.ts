import { EvolutionSpPage } from './app.po';

describe('evolution-sp App', function() {
  let page: EvolutionSpPage;

  beforeEach(() => {
    page = new EvolutionSpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
