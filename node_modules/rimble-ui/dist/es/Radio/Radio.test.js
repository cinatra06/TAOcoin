import Radio from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Radio component sanity', function () {
  it('has name', function () {
    expect(Radio.displayName).toBe('Radio');
  });
  it('matches default snapshot', function () {
    var component = render(React.createElement(Radio, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render(React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(Radio, null)));
    expect(component).toMatchSnapshot();
  });
});