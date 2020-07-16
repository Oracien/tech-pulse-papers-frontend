import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';
import { Grid, List, Image, Divider } from 'semantic-ui-react';
import { shuffle } from 'lodash';
import SearchForm from 'App/shared/components/SearchForm';
import Link from 'App/shared/components/Link';
import { onSearch } from './Search/Utils';
import VespaIcon from 'App/shared/img/VespaIcon.png';
import Footer from 'App/shared/components/Footer';

// Logos used in "featured in" section
import CWLogo from 'App/shared/img/logos/computerworld-logo.png';
import SMDLogo from 'App/shared/img/logos/search-marketing-daily.png';
import ZDNetLogo from 'App/shared/img/logos/zdnet-logo-large.png';
import DatanamiLogo from 'App/shared/img/logos/datanami-logo-2018.png';
import WSJLogo from 'App/shared/img/logos/wsj-logo-alt.svg';

const featuredArticles = [
  {
    logo: CWLogo,
    name: 'ComputerWorld',
    link:
      'https://www.computerworld.com/article/3534478/tech-pitches-in-to-fight-covid-19-pandemic.html',
  },
  {
    logo: SMDLogo,
    name: 'SearchMarketing Daily',
    link:
      'https://www.mediapost.com/publications/article/349673/verizon-media-launches-covid-19-search-engine-for.html',
  },
  {
    logo: ZDNetLogo,
    name: 'ZDNet',
    link:
      'https://www.zdnet.com/article/verizon-introduces-open-source-big-data-coronavirus-search-engine/',
  },
  {
    logo: DatanamiLogo,
    name: 'Datanami',
    link:
      'https://www.datanami.com/2020/04/10/yahoos-vespa-takes-a-whack-at-cord-19-data/',
  },
  {
    logo: WSJLogo,
    name: 'Wall Street Journal',
    link:
      'https://www.wsj.com/articles/machine-learning-experts-delve-into-47-000-papers-on-coronavirus-family-11586338201',
  },
];

const sampleQueries = [
  'What is the impact of school closure in handling the COVID-19 pandemic?',
  '+CT screening COVID-19 +("Machine Learning" AI "Aritifical Intelligence")',
  'Has social distancing had an impact on slowing the spread of COVID-19?',
  'What are the best masks for preventing infection by COVID-19?',
  'What kinds of complications related to COVID-19 are associated with hypertension?',
  'Is +(remdesivir hydroxychloroquine) an effective treatment for COVID-19?',
  '+"diamond princess" cruise +COVID-19',
  'Estimate +COVID-19 +("case fatality rate" cfr ifr "infection fatality rate")',
  '+(title:masks title:respirator title:n95) +covid-19',
];

const TallDivider = styled(Divider)`
  padding-top: 100px;
`;

const Content = styled(Box)`
  background-image: linear-gradient(0deg, #98c1db 7%, #005a8e 100%);
  min-height: calc(100vh - 66px);
`;

const ContentGrid = styled(Grid)`
  &&& {
    min-height: calc(100vh - 130px);
    color: white;
    font-size: 1.1rem;
    margin-top: 0;

    .column {
      padding: 0;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 300;
    }

    h4 {
      font-size: 1.1rem;
      margin: 3rem 0 0;
    }

    & .ui.list {
      margin: 0.5rem 0;
    }

    .ui.form {
      max-width: 800px;
      padding: 0 2rem;
    }

    a {
      color: #b3e5fc !important;
      font-weight: 600;
      font-weight: normal;
    }

    a:hover {
      color: #ffc43c !important;
    }
  }
`;

function SearchSuggestions() {
  return (
    <>
      <h4>Try searching for...</h4>
      <List>
        {shuffle(sampleQueries)
          .slice(0, 3)
          .map((query, i) => (
            <List.Item key={i}>
              <Link to={'/search?query=' + encodeURIComponent(query)}>
                {query}
              </Link>
            </List.Item>
          ))}
      </List>
    </>
  );
}

function VespaDescription() {
  return (
    <Box my={4}>
      <Image src={VespaIcon} size="tiny" centered />
      <Text mt={3}>
        This is an{' '}
        <Link to="https://github.com/Oracien/tech-pulse-papers-frontend/blob/master/README.md">
          open source application{' '}
        </Link>
        on <Link to="https://vespa.ai">Vespa.ai</Link>
      </Text>
      <Text mt={1}>The big data serving engine.</Text>
    </Box>
  );
}

function FeaturedInSection() {
  return (
    <>
      <TallDivider hidden />
      <Text>In the news:</Text>
      <List horizontal>
        {featuredArticles.map((article, i) => (
          <List.Item key={i}>
            <Link to={article.link}>
              <Image
                src={article.logo}
                alt={article.name}
                size="tiny"
                centered
                verticalAlign="middle"
              />
            </Link>
          </List.Item>
        ))}
      </List>
    </>
  );
}

function Main() {
  return (
    <Content width={1}>
      <ContentGrid verticalAlign="middle" textAlign="center">
        <Grid.Column>
          <h1 size="huge">Tech Pulse Papers Search</h1>
          <SearchForm onSearch={onSearch} />
          <SearchSuggestions />
          <VespaDescription />
          <FeaturedInSection />
        </Grid.Column>
      </ContentGrid>
      <Footer page="main" />
    </Content>
  );
}

export default Main;
