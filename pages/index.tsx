import { Col, Container, Spacer } from '@nextui-org/react';
import type { NextPage } from 'next';
import ContentCard from '../components/ContentCard';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Container xs>
        {Array.apply(null, Array(5)).map((_, i) => (
          <Col key={i}>
            <Spacer y={1} />
            <ContentCard />
          </Col>
        ))}
      </Container>
    </div>
  );
};

export default Home;
