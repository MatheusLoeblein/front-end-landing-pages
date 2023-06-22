import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import { screen } from '@testing-library/react';

describe('<GridImage />', () => {
  it('should render', () => {
    renderTheme(<GridImage>Children</GridImage>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
