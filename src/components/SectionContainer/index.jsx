import P from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propsTypes = {
  children: P.node.isRequired,
};
