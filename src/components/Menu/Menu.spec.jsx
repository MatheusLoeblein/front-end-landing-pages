import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import { screen } from '@testing-library/react';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu>Children</Menu>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
