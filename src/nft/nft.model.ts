import * as mongoose from 'mongoose';

export const NFTSchema = new mongoose.Schema({
  uploadFile: { type: String, default: '' },
  collectionName: { type: String, default: '' },
  collectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Collection' },
  name: { type: String, default: '' },
  url: { type: String, default: '' },
  description: { type: String, default: '' },
  price: { type: Number },
  explicitSensitiveContent: { type: Boolean },
  putOnMarketplace: { type: Boolean },
  totalAmount: { type: Number },
  serviceFees: { type: Number },
  minimumBid: { type: Number },
  reservePrice: { type: Number },
  expirationDate: { type: String },
  owner: { type: String, default: '' },
  selletFeeBasisPoints: { type: String, default: '' },
  symbol: { type: String, default: '' },
  uri: { type: String, default: '' },
  externalUrl: { type: String, default: '' },
  creators: [{ type: Object, default: '' }],
  editionNonce: { type: String, default: '' },
  edition: { type: String, default: '' },
  isMutable: { type: Boolean, default: false },
  masterEdition: { type: String, default: '' },
  mintKey: { type: String, default: '' },
  primarySale: { type: Number, default: 0 },
  updateAuthority: { type: String, default: '' },
  image: { type: String, default: '' },
  metaDataAccount:{ type: String, default: ''},
  recpientKey:{ type: String, default: ''}
});
export interface NFT extends mongoose.Document {
  uploadFile: string;
  collectionName: string;
  collectionId: string;
  name: string;
  url: string;
  description: string;
  price: number;
  explicitSensitiveContent: boolean;
  putOnMarketplace: boolean;
  totalAmount: number;
  serviceFees: number;
  minimumBid: number;
  reservePrice: number;
  expirationDate: string;
  owner: string;
  selletFeeBasisPoints: string;
  symbol: string;
  uri: string;
  externalUrl: string;
  creators: Array<any>;
  editionNonce: string;
  edition: string;
  isMutable: boolean;
  masterEdition: string;
  mintKey: string;
  primarySale: number;
  updateAuthority: string;
  image: string;
  metaDataAccount:string
  recpientKey:string
}
