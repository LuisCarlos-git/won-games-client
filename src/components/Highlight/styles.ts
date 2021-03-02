import media from 'styled-media-query';
import styled, { css } from 'styled-components';
import { HighlightProps } from '.';

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>;

const wrapperModifiers = {
  right: () => css`
    grid-template-areas: 'floatImage content';
  `,
  left: () => css`
    grid-template-areas: 'content floatImage';
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ backgroundImage, alignment }) => css`
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    position: relative;
    height: 23rem;
    display: grid;
    grid-template-columns: 1.3fr 2fr;

    ${!!alignment && wrapperModifiers[alignment!]()}

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`;

export const FloatImage = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    grid-area: floatImage;
    align-self: flex-end;

    ${media.greaterThan('medium')`
      max-height: 32rem;      
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    text-align: right;
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large};
      align-self: end;
    `}
  `}
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;
export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
