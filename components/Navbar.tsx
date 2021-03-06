import { Button, Container, Row, Text } from '@nextui-org/react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Navbar = () => {
  return (
    <div style={{ padding: '10px', borderBottom: '1px solid #00000011' }}>
      <Container fluid>
        <Row align={'center'} justify={'space-between'}>
          <Text h3>TEST</Text>
          <WalletMultiButton />
        </Row>
      </Container>
    </div>
  );
};
export default Navbar;
