import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { cityDocument, citySchema } from './schema/citySchema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AdminService {

  constructor(@InjectModel(citySchema.name) private cityModel:Model<cityDocument>){}
  create(createAdminDto: CreateAdminDto) : Promise<citySchema> {
    console.log('createAdminDto:',createAdminDto);
    const model = new this.cityModel();
    model.cityName=createAdminDto.cityName;
    
    return model.save();
  }

  findAll() {
    return this.cityModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
