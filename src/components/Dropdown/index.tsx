import { useState } from 'react';
import * as S from './styles';

export type DropdownProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const Dropdown = ({ children, title }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownActions = (value: boolean) => () => setIsOpen(value);
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title aria-label="toglle dropdown" onClick={dropdownActions(!isOpen)}>
        {title}
      </S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  );
};

export default Dropdown;
