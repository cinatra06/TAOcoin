import Table from './';
import ThemeProvider from '../ThemeProvider';
import theme from '../theme';
describe('Table component sanity', function () {
  it('has name', function () {
    expect(Table.displayName).toBe('Table');
  });
  it('matches default snapshot', function () {
    var component = render(React.createElement(Table, null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "#"), React.createElement("th", null, "First Name"), React.createElement("th", null, "Last Name"), React.createElement("th", null, "Username"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "1"), React.createElement("td", null, "Mark"), React.createElement("td", null, "Otto"), React.createElement("td", null, "@mdo")), React.createElement("tr", null, React.createElement("td", null, "2"), React.createElement("td", null, "Jacob"), React.createElement("td", null, "Thornton"), React.createElement("td", null, "@fat")), React.createElement("tr", null, React.createElement("td", null, "3"), React.createElement("td", null, "Larry"), React.createElement("td", null, "Bird"), React.createElement("td", null, "@twitter")))));
    expect(component).toMatchSnapshot();
  });
  it('matches themed snapshot', function () {
    var component = render(React.createElement(ThemeProvider, {
      theme: theme
    }, React.createElement(Table, null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "#"), React.createElement("th", null, "First Name"), React.createElement("th", null, "Last Name"), React.createElement("th", null, "Username"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "1"), React.createElement("td", null, "Mark"), React.createElement("td", null, "Otto"), React.createElement("td", null, "@mdo")), React.createElement("tr", null, React.createElement("td", null, "2"), React.createElement("td", null, "Jacob"), React.createElement("td", null, "Thornton"), React.createElement("td", null, "@fat")), React.createElement("tr", null, React.createElement("td", null, "3"), React.createElement("td", null, "Larry"), React.createElement("td", null, "Bird"), React.createElement("td", null, "@twitter"))))));
    expect(component).toMatchSnapshot();
  });
});