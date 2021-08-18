import { useState } from 'react';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import Heading from 'components/Heading';
import Radio from 'components/Radio';
import * as S from './styles';
import { useCallback } from 'react';
import { Close } from '@styled-icons/material-outlined/Close';
import { FilterList } from '@styled-icons/material-outlined/FilterList';

type Field = {
  label: string;
  name: string;
};

export type ItemProps = {
  title: string;
  name: string;
  type: 'radio' | 'checkbox' | string;
  fields: Field[];
};

type Values = {
  [key: string]: boolean | string;
};

export type ExploreSidebarProps = {
  items: ItemProps[];
  initialValues?: Values;
  onFilter: (values: Values) => void;
};

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (name: string, value: string | boolean) => {
    setValues((oldState) => ({ ...oldState, [name]: value }));
  };

  const handleFilter = useCallback(() => {
    onFilter(values);
    setIsOpen(false);
  }, [values, onFilter]);

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>
      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  labelColor="white"
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={!!values[field.name]}
                  onCheck={(value) => handleChange(field.name, value)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  id={field.name}
                  key={field.name}
                  name={item.name}
                  value={field.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={field.name === values[item.name]}
                  onChange={() => handleChange(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>
      <S.Footer>
        <Button onClick={handleFilter} fullWidth size="medium">
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default ExploreSidebar;
