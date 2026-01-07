import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Teams } from 'src/schemas/team.schema';
import { CreateTeamDto } from 'src/types/team.dto';

@Injectable()
export class TeamService {
  constructor(@InjectModel(Teams.name) private teamModel: Model<Teams>) {}

  findOneById(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    _teamId: Types.ObjectId,
  ): Promise<any> {
    return this.teamModel.findOne({
      _id: _teamId,
      event: _eventId,
      company: _companyId,
    });
  }

  findAllById(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
  ): Promise<any> {
    return this.teamModel.find({ company: _companyId, event: _eventId });
  }

  create(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    body: CreateTeamDto,
  ): Promise<any> {
    return this.teamModel.create({
      company: _companyId,
      event: _eventId,
      ...body,
    });
  }

  update(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    _teamId: Types.ObjectId,
    body: Partial<Teams>,
  ): Promise<any> {
    return this.teamModel.findOneAndUpdate(
      { _id: _teamId, event: _eventId, company: _companyId },
      body,
    );
  }
}
