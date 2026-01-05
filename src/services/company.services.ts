import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Compaines } from 'src/schemas/compaines.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Compaines.name) private companyModel: Model<Compaines>,
  ) {}

  findByEmail(email: string): Promise<any> {
    return this.companyModel.findOne({ email });
  }

  createBasic(body: any): Promise<any> {
    return this.companyModel.create({ registerd: false, ...body });
  }
}
