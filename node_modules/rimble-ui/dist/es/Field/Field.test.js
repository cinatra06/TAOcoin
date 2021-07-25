import Field from './';
import Input from '../Input';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Field component sanity', function () {
  it('has name', function () {
    expect(Field.displayName).toBe('Field');
  });
  it('matches default snapshot', function () {
    var component = render(React.createElement(Field, {
      label: "Input label"
    }, React.createElement(Input, null)));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render(React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(Field, {
      label: "Themed input label"
    }, React.createElement(Input, null))));
    expect(component).toMatchSnapshot();
  });
});