import { Post, StreamableFile } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collecionService: CollectionService) {}

  @Post('/addCollection')
  async addCollection(@Req() request: Request) {
    return await this.collecionService.addNewCollection(request);
  }

  @Patch('/update/:id')
  async updateCollection(@Param('id') id: string, @Req() request: Request) {
    return await this.collecionService.updateNewCollection(id, request);
  }
  @Get('/getCollection/:owner')
  async getCollection(@Req() request: Request) {
    return await this.collecionService.getCollection(request);
  }
  @Get('/checkipfs')
  async checkIpfs(@Req() request:Request){
    // console.log(join(process.cwd()))
    return await this.collecionService.checkIPFS(request)
    // const file = createReadStream(join(process.cwd(), '/src/collection/968889.jpg'));
    // console.log(typeof file)
    // // return new StreamableFile(file);
    // console.log(new StreamableFile(file))
  }
}
