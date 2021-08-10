import { Windows, Linux, Apple } from 'styled-icons/fa-brands';

import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';

import * as S from './styles';

type Platform = 'windows' | 'linux' | 'mac';

export type GameDetailsProps = {
  platforms: Platform[];
};

const GameDetails = ({ platforms }: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="linux" size={18} />,
    windows: <Windows title="windows" size={18} />,
    mac: <Apple title="mac" size={18} />
  };

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>Gearbox</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release date</S.Label>
          <S.Description>Nov 16, 2019</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Platform</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => {
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>;
            })}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2k</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>18+</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>action</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameDetails;
