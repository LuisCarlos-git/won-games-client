import React, { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  icon,
  iconPosition = 'left',
  disabled = false,
  error = '',
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper disabled={disabled} error={error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper error={!!error} iconPosition={iconPosition}>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          disabled={disabled}
          id={labelFor}
          {...rest}
          onChange={onChange}
          value={value}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};
export default TextField;
