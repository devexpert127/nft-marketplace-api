import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NftController } from './nft.controller';
import { NFTSchema } from './nft.model';
import { NftService } from './nft.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name:"NFT",schema:NFTSchema}])
  ],
  controllers: [NftController],
  providers: [NftService]
})
export class NftModule {}
