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

  findAllById(_companyId: Types.ObjectId): Promise<any> {
    return this.eventModel.find({ company: _companyId });
  }

  create(_companyId: Types.ObjectId, body: CreateEventDto): Promise<any> {
    return this.eventModel.create({ company: _companyId, ...body });
  }

  update(
    _companyId: Types.ObjectId,
    _id: Types.ObjectId,
    body: CreateEventDto,
  ): Promise<any> {
    return this.eventModel.findOneAndUpdate({ _id, company: _companyId }, body);
  }
}
