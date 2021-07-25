import Tooltip from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
import Button from '../Button';
describe('Tooltip component sanity', function () {
  it('has name', function () {
    expect(Tooltip.displayName).toBe('Tooltip');
  });
  it('matches default snapshot', function () {
    var component = mount(React.createElement(Tooltip, null, React.createElement(Button, null)));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = mount(React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(Tooltip, null, React.createElement(Button, null))));
    expect(component).toMatchSnapshot();
  });
});