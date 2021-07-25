import Textarea from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Textarea component sanity', function () {
  it('has name', function () {
    expect(Textarea.displayName).toBe('Textarea');
  });
  it('matches default snapshot', function () {
    var component = render(React.createElement(Textarea, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render(React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(Textarea, null)));
    expect(component).toMatchSnapshot();
  });
});