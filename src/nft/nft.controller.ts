import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request, request } from 'express';
import { NftService } from './nft.service';

@Controller('nft')
export class NftController {
    constructor(private readonly nftService:NftService){}
    @Post("/addnft")
    async addNft(@Req() request:Request){
        let response=await this.nftService.createNft(request)
        return response 
    }
    @Get('/getNFTs/:owner')
    async getNFT(@Req() request:Request)
    {
        return await this.nftService.getNft(request)
    }
    @Get('/getNftByCollection/:collectionId')
    async getNftByCollectionId(@Req() request:Request){
        return await this.nftService.getNftByCollection(request)
    }
}
