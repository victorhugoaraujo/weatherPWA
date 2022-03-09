import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render boxShadow', () => {
    renderWithTheme(<Button boxShadow>Search for places</Button>);

    expect(
      screen.getByRole('button', { name: /Search for places/i })
    ).toHaveStyle({
      'box-shadow': '0px 4px 4px rgba(0,0,0,0.25)',
    });
  });
});
