import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  label,
  labelFor,
  labelColor = 'black',
  onCheck,
  isChecked = false,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;
    setChecked(status);

    if (onCheck) onCheck(status);
  };

  return (
    <S.Wrapper>
      <S.Input
        onChange={onChange}
        checked={checked}
        id={labelFor}
        type="checkbox"
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
