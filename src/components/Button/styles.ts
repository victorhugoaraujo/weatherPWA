import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps, ButtonColors } from '.';

export type WrapperProps = {
  hasIcon: boolean;
} & ButtonProps;

const buttonModifiers = {
  bgColor: (theme: DefaultTheme, bgColor: ButtonColors) => css`
    background-color: ${theme.colors[bgColor]};
  `,
  textColor: (theme: DefaultTheme, textColor: ButtonColors) => css`
    background-color: ${theme.colors[textColor]};
  `,
  boxShadow: () => css`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
  withIcon: () => css`
    border-radius: 25px;
    padding: 10px;
    svg {
      width: 1.5rem;
      & + span {
        margin-left: 1px;
      }
    }
  `,
};

export const Button = styled.button<WrapperProps>`
  ${({ theme, boxShadow, bgColor, textColor, hasIcon }) => css`
    height: 3.5rem;
    padding: 10px 20px;
    box-sizing: border-box;
    border: none;

    ${!!hasIcon && buttonModifiers.withIcon()}
    ${!!bgColor && buttonModifiers.bgColor(theme, bgColor)}
    ${!!boxShadow &&
    buttonModifiers.boxShadow()}
    ${!!textColor &&
    buttonModifiers.textColor(theme, textColor)}
  `}
`;
