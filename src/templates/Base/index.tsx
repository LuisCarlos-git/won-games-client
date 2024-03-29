import { Container } from 'components/Container';
import Menu from 'components/Menu';
import Footer from 'components/Footer';

import * as S from './styles';

type BaseProps = {
  children: React.ReactNode | React.ReactNodeArray;
};

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Container>
      <Menu username="Luis Carlos" />
    </Container>
    <S.Content>{children}</S.Content>
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
);

export default Base;
