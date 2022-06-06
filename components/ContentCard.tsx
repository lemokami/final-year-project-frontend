import { Button, Card, Col, Row, Text } from '@nextui-org/react';

const ContentCard = () => {
  return (
    <Card cover css={{ w: '100%', p: 0 }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          {/* <Text size={12} weight='bold' transform='uppercase' color='#9E9E9E'>
            Author Name
          </Text>
          <Text h3 color='white'>
            Small description{' '}
          </Text> */}
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image
          src='https://nextui.org/images/card-example-4.jpeg'
          height={400}
          width='100%'
          alt='Relaxing app background'
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: 'absolute',
          bgBlur: '#0f1114',
          borderTop: '$borderWeights$light solid $gray700',
          bottom: 0,
          zIndex: 1,
        }}>
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Card.Image
                  src='https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg'
                  css={{ background: 'black' }}
                  height={40}
                  width={40}
                  alt='Breathing app icon'
                />
              </Col>
              <Col>
                <Text color='#d1d1d1' size={12}>
                  Author Name
                </Text>{' '}
                <Text color='#d1d1d1' size={12}>
                  {' '}
                  Description
                </Text>{' '}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify='flex-end'>
              <Button
                flat
                auto
                rounded
                css={{ color: '#94f9f0', bg: '#94f9f026' }}>
                <Text
                  css={{ color: 'inherit' }}
                  size={12}
                  weight='bold'
                  transform='uppercase'>
                  Share
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default ContentCard;
