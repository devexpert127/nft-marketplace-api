import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionController } from './collection.controller';
import { CollectionSchema } from './collection.model';
import { CollectionService } from './collection.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name:"Collection",schema:CollectionSchema}])
  ],
  controllers: [CollectionController],
  providers: [CollectionService]
})
export class CollectionModule {}
