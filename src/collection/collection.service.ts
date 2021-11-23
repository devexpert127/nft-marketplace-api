import { NotFoundException, StreamableFile } from '@nestjs/common';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Collection, Model } from 'mongoose';
let IPFS = require('ipfs');
let fs = require('fs');
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class CollectionService {
  constructor(
    @InjectModel('Collection')
    private readonly collectionModel: Model<Collection>,
  ) {}
  async addNewCollection(req) {
    try {
      let newCollection = new this.collectionModel(req.body);
      let collection = await this.collectionModel.create(newCollection);
      return { collection };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          msg: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async getCollection(req) {
    try {
      return await this.collectionModel.find({ owner: req.params.owner });
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          msg: error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async updateNewCollection(id, req) {
    let {
      uploadLogo,
      uploadFeaturedImage,
      bannerImage,
      name,
      url,
      description,
      links,
      explicitSensitiveContent,
    } = req.body;
    const collectionToUpdate = await this.findCollection(id);
    const updatedCollection = await this.collectionModel.findByIdAndUpdate(id, {
      $set: {
        name: name || collectionToUpdate.name,
        uploadLogo: uploadLogo || collectionToUpdate.uploadLogo,
        uploadFeaturedImage:
          uploadFeaturedImage || collectionToUpdate.uploadFeaturedImage,
        bannerImage: bannerImage || collectionToUpdate.bannerImage,
        url: url || collectionToUpdate.url,
        description: description || collectionToUpdate.description,
        links: links || collectionToUpdate.links,
      },
    });
    console.log(collectionToUpdate);
    return collectionToUpdate;
  }
  async checkIPFS(req) {
    try {
      const data = fs.readFileSync(
        `${join(process.cwd())}/src/collection/968889.jpg`,
        'utf8',
      );
      // console.log(data)
      const filea = createReadStream(
        join(process.cwd(), '/src/collection/968889.jpg'),
      );
      console.log(typeof filea);
      // return new StreamableFile(file);
      let newStreamFile = new StreamableFile(filea);
      const file = {
        path: join(process.cwd(), '/src/collection/968889.jpg'),
      };
      const result = await IPFS.add(file);

      console.info(result);
      console.log(file);
    } catch (err) {
      console.error(err);
    }
  }
  async findCollection(id: string) {
    let collection;

    try {
      collection = await this.collectionModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not find the product');
    }

    if (!collection) {
      throw new NotFoundException('Could not find the collection');
    }

    return collection;
  }
}
