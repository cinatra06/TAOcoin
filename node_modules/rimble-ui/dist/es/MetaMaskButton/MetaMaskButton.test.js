import MetaMaskButton from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('MetaMaskButton component sanity', function () {
  it('has name', function () {
    expect(MetaMaskButton.displayName).toBe('MetaMaskButton');
  });
  it('matches default snapshot', function () {
    var component = shallow(React.createElement(MetaMaskButton, null));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = shallow(React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(MetaMaskButton, null)));
    expect(component).toMatchSnapshot();
  });
});