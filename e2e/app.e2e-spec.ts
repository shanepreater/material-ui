import { MaterialUi2Page } from './app.po';

describe('material-ui2 App', function() {
  let page: MaterialUi2Page;

  beforeEach(() => {
    page = new MaterialUi2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
