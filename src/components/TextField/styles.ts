import { TextFieldProps } from './index';
import styled, { css, DefaultTheme } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    cursor: pointer;
    display: block;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

const inputWrappermodifiers = {
  left: () => css`
    ${Input} {
      order: 2;
    }

    ${Icon} {
      order: 1;
    }
  `,
  right: () => css`
    ${Input} {
      order: 1;
      padding-left: 0;
    }

    ${Icon} {
      order: 2;
    }
  `
};

type InputWrapperProps = {
  error: boolean;
} & Pick<TextFieldProps, 'iconPosition'>;

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, iconPosition, error }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${error ? theme.colors.error : theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${!!iconPosition && inputWrappermodifiers[iconPosition]}
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    & > svg {
      width: 100%;
    }
  `}
`;
const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${Label}, ${Icon} > svg {
      color: ${theme.colors.error};
    }
  `
};

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Wrapper = styled.div<Pick<TextFieldProps, 'disabled' | 'error'>>`
  ${({ theme, disabled, error }) => css`
    ${!!disabled && wrapperModifiers.disabled(theme)}
    ${!!error && wrapperModifiers.error(theme)};
  `}
`;
