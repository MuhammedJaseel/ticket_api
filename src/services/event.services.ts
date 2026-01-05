import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Events } from 'src/schemas/events.schema';
import { CreateEventDto } from 'src/types/event.dto';

@Injectable()
export class EventService {
  constructor(@InjectModel(Events.name) private eventModel: Model<Events>) {}

  create(_id: Types.ObjectId, body: CreateEventDto): Promise<any> {
    return this.eventModel.create({ company: _id, ...body });
  }
}
