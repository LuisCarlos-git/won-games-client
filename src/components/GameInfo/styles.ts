import styled, { css } from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';
import * as RibbonStyles from 'components/Ribbon/styles';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    background: ${theme.colors.white};
    position: relative;

    ${RibbonStyles.Wrapper} {
      right: -1rem;
      &::before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('small')`
      padding: ${theme.spacings.small};
    `}

    ${media.greaterThan('medium')`
      ${RibbonStyles.Wrapper} {
          right: ${theme.spacings.small};
          top: ${theme.spacings.small};
          font-size: ${theme.font.sizes.large};
          &::before {
            border: none;
          }
        }
    `}
  `}
`;
export const HeadingWrapper = styled.div``;
export const Description = styled.p`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.mediumGray};
    max-width: 77rem;
  `}
`;
export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.lessThan('medium')`
      ${ButtonStyles.Wrapper} + ${ButtonStyles.Wrapper} {
        margin-top: ${theme.spacings.xxsmall};
      }
    `}

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;
    `}
  `}
`;
