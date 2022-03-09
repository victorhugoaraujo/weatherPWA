import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  // | AnchorHTMLAttributes<HTMLAnchorElement>
  ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonColors = 'darkGray' | 'lightGray' | 'blue';

export type ButtonProps = {
  boxShadow?: boolean;
  children?: React.ReactNode;
  bgColor?: ButtonColors;
  textColor?: ButtonColors;
  icon?: JSX.Element;
} & ButtonTypes;

const Button = ({
  children,
  boxShadow = false,
  bgColor = 'darkGray',
  textColor = 'lightGray',
  icon,
  ...props
}: ButtonProps) => (
  <S.Button
    boxShadow={boxShadow}
    bgColor={bgColor}
    textColor={textColor}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Button>
);

export default Button;
