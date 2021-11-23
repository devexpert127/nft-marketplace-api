import * as mongoose from 'mongoose';

export const CollectionSchema = new mongoose.Schema({
  uploadLogo: { type: String, default: '' },

  uploadFeaturedImage: { type: String, default: '' },
  bannerImage: { type: String, default: '' },
  name: { type: String, default: '', unique: true },
  url: { type: String, default: '' },
  description: { type: String, default: '' },
  links: { type: Object },
  explicitSensitiveContent: { type: Boolean },
  owner: { type: String },
});
export interface Collection extends mongoose.Document {
  uploadLogo: string;
  uploadFeaturedImage: string;
  bannerImage: string;
  name: string;
  url: string;
  description: string;
  owner: string;
  links: any;
  explicitSensitiveContent: boolean;
}
