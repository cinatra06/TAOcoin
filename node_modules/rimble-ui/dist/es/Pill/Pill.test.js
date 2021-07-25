import Pill from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Pill component sanity', function () {
  it('has name', function () {
    expect(Pill.displayName).toBe('Pill');
  });
  it('matches default snapshot', function () {
    var component = render(React.createElement(Pill, {
      color: 'blue'
    }));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render(React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(Pill, {
      color: 'blue'
    })));
    expect(component).toMatchSnapshot();
  });
});