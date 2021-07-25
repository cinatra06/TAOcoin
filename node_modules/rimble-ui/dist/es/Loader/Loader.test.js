import Loader from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Loader component sanity', function () {
  it('has name', function () {
    expect(Loader.displayName).toBe('Loader');
  });
  it('matches default snapshot', function () {
    var component = render(React.createElement(Loader, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render(React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(Loader, null)));
    expect(component).toMatchSnapshot();
  });
});