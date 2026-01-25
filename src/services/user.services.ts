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
      deleted: { $ne: true },
    });
  }

  async findAllById(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
  ): Promise<any> {
    const total = await this.userModel.countDocuments({
      company: _companyId,
      event: _eventId,
      deleted: { $ne: true },
    });

    const data = await this.userModel
      .find({ company: _companyId, event: _eventId, deleted: { $ne: true } })
      .sort({ createdAt: -1 })
      .skip(0)
      .limit(20);

    return { total, data, page: 1, limit: 20 };
  }

  async create(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    body: CreateUserDto,
  ): Promise<any> {
    const total = await this.userModel.countDocuments({
      company: _companyId,
      event: _eventId,
    });

    body['_uniqueId'] = `${_companyId}:${_eventId}:${total + 1}`;
    body['uniqueId'] = `${total + 1}`;

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
