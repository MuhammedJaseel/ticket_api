import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Events } from 'src/schemas/events.schema';
import { CreateEventDto } from 'src/types/event.dto';

@Injectable()
export class EventService {
  constructor(@InjectModel(Events.name) private eventModel: Model<Events>) {}

  findOneById(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
  ): Promise<any> {
    return this.eventModel.findOne({ _id: _eventId, company: _companyId });
  }

  async checkUniqueName(companyId: string, uniqueName: string): Promise<any> {
    const _uniqueName = `${companyId}:${uniqueName}`;
    const event = await this.eventModel.findOne({ _uniqueName });
    if (event) return { used: true };
    return { used: false };
  }

  async findAllById(_companyId: Types.ObjectId): Promise<any> {
    const total = await this.eventModel.countDocuments({
      company: _companyId,
      deleted: { $ne: true },
    });

    const data = await this.eventModel
      .find({ company: _companyId })
      .sort({ createdAt: -1 })
      .skip(0)
      .limit(20);

    return { total, data, page: 1, limit: 20 };
  }

  create(_companyId: Types.ObjectId, body: CreateEventDto): Promise<any> {
    const company = _companyId;
    const _uniqueName = `${_companyId}:${body.uniqueName}`;
    return this.eventModel.create({ company, _uniqueName, ...body });
  }

  update(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    body: Partial<Events>,
  ): Promise<any> {
    if (body.hasOwnProperty('uniqueName'))
      body['_uniqueName'] = `${_companyId}:${body['eventId']}`;

    return this.eventModel.findOneAndUpdate(
      { _id: _eventId, company: _companyId },
      body,
    );
  }
}
