import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CitySchema, citySchema } from './schema/citySchema';

@Module({

  imports: [MongooseModule.forFeature([{name:citySchema.name,schema:CitySchema}])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
