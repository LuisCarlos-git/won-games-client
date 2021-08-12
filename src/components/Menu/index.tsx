import { useState } from 'react';
import Link from 'next/link';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill';
import { AddShoppingCart as AddShoppingCartIcon } from '@styled-icons/material-outlined';
import { Search as SearchIcon } from '@styled-icons/material-outlined';
import { Close as CloseIcon } from '@styled-icons/material-outlined';

import * as S from './styles';

import Logo from '../Logo';
import Button from 'components/Button';
import MediaMatch from 'components/MediaMatch';

export type MenuProps = {
  username?: string;
};

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo isMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <AddShoppingCartIcon aria-label="Open Cart" />
        </S.IconWrapper>

        <MediaMatch greaterThan="medium">
          {!username && (
            <Link href="/sign-in" passHref>
              <Button as="a" size="medium">
                Sign In
              </Button>
            </Link>
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
          {!!username && (
            <>
              <Link href="/" passHref>
                <S.MenuLink>My account</S.MenuLink>
              </Link>
              <Link href="/" passHref>
                <S.MenuLink>Explore</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Login now
            </Button>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount>Sign up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
