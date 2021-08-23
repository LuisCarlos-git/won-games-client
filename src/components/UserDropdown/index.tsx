import React from 'react';
import Link from 'next/link';
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from 'styled-icons/material-outlined';
import { ChevronDown } from 'styled-icons/boxicons-regular';

import Dropdown from 'components/Dropdown';

import * as S from './styles';

export type UserDropdownProps = {
  username?: string;
};

const TemplateTitle = ({ username = '' }) => (
  <React.Fragment>
    <AccountCircle size={24} />
    <S.Username>{username}</S.Username>
    <ChevronDown size={24} />
  </React.Fragment>
);

const UserDropdown = ({ username = '' }: UserDropdownProps) => (
  <Dropdown title={<TemplateTitle username={username} />}>
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link>
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.Link>
      </Link>

      <Link href="/wishlist" passHref>
        <S.Link>
          <FavoriteBorder size={24} />
          <span>Wishlist</span>
        </S.Link>
      </Link>

      <Link href="/sign-in" passHref>
        <S.Link>
          <ExitToApp size={24} />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
);

export default UserDropdown;
