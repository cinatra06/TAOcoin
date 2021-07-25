import Flash from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Select component sanity', function () {
  it('has name', function () {
    expect(Flash.displayName).toBe('Flash');
  });
  it('matches default snapshot', function () {
    var component = shallow(React.createElement(Flash, null, "Default Flash"));
    expect(component).toMatchSnapshot();
  });
  it('matches info variant snapshot', function () {
    var component = shallow(React.createElement(Flash, {
      variant: 'info'
    }, "Info Flash"));
    expect(component).toMatchSnapshot();
  });
  it('matches success variant snapshot', function () {
    var component = shallow(React.createElement(Flash, {
      variant: 'success'
    }, "Success Flash"));
    expect(component).toMatchSnapshot();
  });
  it('matches warning variant snapshot', function () {
    var component = shallow(React.createElement(Flash, {
      variant: 'warning'
    }, "Warning Flash"));
    expect(component).toMatchSnapshot();
  });
  it('matches danger variant snapshot', function () {
    var component = shallow(React.createElement(Flash, {
      variant: 'danger'
    }, "Danger Flash"));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render(React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(Flash, null, "Flash")));
    expect(component).toMatchSnapshot();
  });
});