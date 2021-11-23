import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NFT } from './nft.model';
import fetch from 'node-fetch';
@Injectable()
export class NftService {
  constructor(@InjectModel('NFT') private readonly nftModel: Model<NFT>) {}
  async createNft(req) {
    let response = await fetch(req.body.uri);
    response = await response.json();
    req.body.image = response.properties.image;
    let newNFT = new this.nftModel(req.body);
    return await this.nftModel.create(newNFT);
  }
  async getNft(req) {
    return await this.nftModel.find({ owner: req.params.owner });
  }
  async getNftByCollection(req){
    return await this.nftModel.find({collectionId:req.params.collectionId})
  }
}
