import { Heading } from '@storybook/blocks';
import * as Styled from './styles';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        // const data = await fetch(
        //   'http://localhost:1337/api/pages/?slug=olha-so-que-legal-minha-pagina',
        // );

        const data = await fetch('aksmdkas');
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    console.log(data.slug);
    return <h1>Carregando...</h1>;
  }

  return <Base {...mockBase} />;
}

export default Home;
