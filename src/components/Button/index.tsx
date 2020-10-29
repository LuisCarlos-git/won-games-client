import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => (
  <S.Wrapper hasIcon={!!icon} fullWidth={fullWidth} size={size} {...rest}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
