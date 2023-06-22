import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';
import { screen } from '@testing-library/react';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

describe('<GoTop />', () => {
  it('should render', () => {
    renderTheme(<GoTop>Children</GoTop>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
