import { renderWithTheme } from 'utils/tests/helpers';

import Main from '.';

describe('<Main />', () => {
  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#1e213a' });
  });
});
