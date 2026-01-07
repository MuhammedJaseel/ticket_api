import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Compaines } from 'src/schemas/compaines.schema';
import { RegisterCompanyDto } from 'src/types/company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Compaines.name) private companyModel: Model<Compaines>,
  ) {}

  findByEmail(email: string): Promise<any> {
    return this.companyModel.findOne({ email });
  }

  findById(_id: Types.ObjectId): Promise<any> {
    return this.companyModel.findById(_id);
  }

  createBasic(body: any): Promise<any> {
    return this.companyModel.create({ registerd: false, ...body });
  }

  register(_id: Types.ObjectId, body: RegisterCompanyDto): Promise<any> {
    return this.companyModel.findByIdAndUpdate(_id, {
      registerd: true,
      ...body,
    });
  }
}
