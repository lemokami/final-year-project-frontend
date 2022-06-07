import { Program } from '@project-serum/anchor';
import { AnchorWallet } from '@solana/wallet-adapter-react';
import { getProvider } from './solana';
import idl from '../idl.json';

export const uploadMedia = async (wallet: AnchorWallet, blob: any) => {
  const provider = await getProvider(wallet, 'processed'); //TODO: verify preflight commitment
  if (!provider) {
    return null;
  }
  const IDL = JSON.parse(JSON.stringify(idl));

  const program = new Program(IDL, idl.metadata.address, provider);
  try {
    //TODO: upload file to IPFS and get hash
    // const hash = uploadToIPFS(blob)

    //TODO:fill with necessary args
    await program.rpc.initialize({});
    await program.rpc.uploadMedia({});
  } catch (error) {
    console.log(error);
  }
};
