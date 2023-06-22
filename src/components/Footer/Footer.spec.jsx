import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';
import { screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={'<h1>Olá</h1>'} />);

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: center;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c2 {
        font-size: 2.4rem;
      }

      .c1 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
        width: 100%;
      }

      <div>
        <div
          class="c0"
        >
          <div
            class="c1"
          >
            <div
              class="c2"
            >
              <h1>
                Olá
              </h1>
            </div>
          </div>
        </div>
      </div>
    `);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
