import React, { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input id={labelFor} {...rest} onChange={onChange} value={value} />
      </S.InputWrapper>
    </S.Wrapper>
  );
};
export default TextField;
