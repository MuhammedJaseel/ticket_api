import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Users } from 'src/schemas/users.schema';
import { CreateUserDto } from 'src/types/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(Users.name) private userModel: Model<Users>) {}

  findOneById(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    _userId: Types.ObjectId,
  ): Promise<any> {
    return this.userModel.findOne({
      _id: _userId,
      company: _companyId,
      event: _eventId,
    });
  }

  findAllById(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
  ): Promise<any> {
    return this.userModel.find({ company: _companyId, event: _eventId });
  }

  create(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    body: CreateUserDto,
  ): Promise<any> {
    return this.userModel.create({
      company: _companyId,
      event: _eventId,
      ...body,
    });
  }

  update(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    _userId: Types.ObjectId,
    body: Partial<Users>,
  ): Promise<any> {
    return this.userModel.findOneAndUpdate(
      { _id: _userId, company: _companyId, event: _eventId },
      body,
    );
  }
}
