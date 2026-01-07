import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Events } from 'src/schemas/events.schema';
import { CreateEventDto, UpdateEventDto } from 'src/types/event.dto';

@Injectable()
export class EventService {
  constructor(@InjectModel(Events.name) private eventModel: Model<Events>) {}

  findOneById(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
  ): Promise<any> {
    return this.eventModel.findOne({ _id: _eventId, company: _companyId });
  }

  async findAllById(_companyId: Types.ObjectId): Promise<any> {
    const total = await this.eventModel.countDocuments({
      company: _companyId,
    });

    const data = await this.eventModel
      .find({ company: _companyId })
      .sort({ createdAt: -1 })
      .skip(0)
      .limit(20);

    return { total, data, page: 1, limit: 20 };
  }

  create(_companyId: Types.ObjectId, body: CreateEventDto): Promise<any> {
    return this.eventModel.create({ company: _companyId, ...body });
  }

  update(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    body: Partial<Events>,
  ): Promise<any> {
    return this.eventModel.findOneAndUpdate(
      { _id: _eventId, company: _companyId },
      body,
    );
  }
}
