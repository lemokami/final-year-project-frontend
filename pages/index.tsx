import {
  Button,
  Col,
  Container,
  Grid,
  Image,
  Loading,
  Row,
  Spacer,
} from '@nextui-org/react';
import { AnchorWallet, useAnchorWallet } from '@solana/wallet-adapter-react';
import type { NextPage } from 'next';
import { ChangeEventHandler, useState } from 'react';
import ContentCard from '../components/ContentCard';
import Navbar from '../components/Navbar';
import { uploadMedia } from '../helpers/functions';

const Home: NextPage = () => {
  const wallet = useAnchorWallet();

  const [file, setFile] = useState<null | File>(null);
  const [fileBlob, setFileBlob] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const fileSelected: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFile((e.target.files as FileList)[0]); // file
    setFileBlob(URL.createObjectURL((e.target.files as FileList)[0])); //  blob
  };

  const createContract = async () => {
    if (!file) return;

    setLoading(true);
    //TODO: do the contract functions
    // uploadMedia(wallet as AnchorWallet, file);
  };
  return (
    <div>
      <Navbar />
      <Container xs>
        {fileBlob && <Image src={fileBlob} alt={file?.name} />}
        <Grid>
          <Row>
            <Button as='label' style={{ margin: '20px' }}>
              <input
                type='file'
                style={{ display: 'none' }}
                accept='image/x-png,image/gif,image/jpeg'
                onChange={fileSelected}
              />
              Upload file
            </Button>
            <Button style={{ margin: '20px' }} onClick={createContract}>
              {loading ? (
                <Loading type='points-opacity' color='currentColor' size='sm' />
              ) : (
                <span>Create a SmartContract</span>
              )}
            </Button>
          </Row>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
