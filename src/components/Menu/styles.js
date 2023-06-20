import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: red;
    border-bottom: ${theme.colors.mediumGray};
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;

  `}
`;

export const Button = styled.div`
  ${({ theme }) => css`

  `}
`;
