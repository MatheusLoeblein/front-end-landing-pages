import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';

export const Menu = ({ links = [], LogoData }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <LogoLink {...LogoData} />
        <NavLinks links={links} />
      </SectionContainer>
    </Styled.Container>
  );
};

Menu.propsTypes = {
  ...NavLinks.propsTypes,
  logoData: P.shape(LogoLink.propsTypes).isRequired,
};
