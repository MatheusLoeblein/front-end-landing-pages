import { Heading } from '@storybook/blocks';
import * as Styled from './styles';
import { Base } from '../Base';
import { mockBase } from '../Base/stories';

function Home() {
  return <Base {...mockBase} />;
}

export default Home;
