import { Container } from 'components/Container';
import Menu from 'components/Menu';
import Footer from 'components/Footer';

import * as S from './styles';

type BaseProps = {
  children: React.ReactNode | React.ReactNodeArray;
};

const Base = ({ children }: BaseProps) => (
  <section>
    <Container>
      <Menu />
    </Container>
    {children}
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Base;
