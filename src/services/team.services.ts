import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { TeamActivity, Teams } from 'src/schemas/team.schema';
import { CreateTeamDto } from 'src/types/team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Teams.name) private teamModel: Model<Teams>,
    @InjectModel(TeamActivity.name)
    private teamActivityModel: Model<TeamActivity>,
  ) {}

  findTeamLastLogin(_team: string) {
    const team = new Types.ObjectId(_team);
    return this.teamActivityModel
      .findOne({ team })
      .sort({ createdAt: -1 })
      .select('createdAt');
  }

  findByIdForDetails(id: string): Promise<any> {
    return this.teamModel
      .findById(id)
      .select('uniqueId name email phone role shift')
      .populate('event', 'hallAccess')
      .lean();
  }

  findOne(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    _teamId: Types.ObjectId,
  ): Promise<any> {
    return this.teamModel.findOne({
      _id: _teamId,
      event: _eventId,
      company: _companyId,
      deleted: { $ne: true },
    });
  }

  async findAllById(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
  ): Promise<any> {
    const total = await this.teamModel.countDocuments({
      company: _companyId,
      event: _eventId,
      deleted: { $ne: true },
    });

    const data = await this.teamModel
      .find({ company: _companyId, event: _eventId, deleted: { $ne: true } })
      .sort({ createdAt: -1 })
      .skip(0)
      .limit(20);

    return { total, data, page: 1, limit: 20 };
  }

  async create(
    _companyId: Types.ObjectId,
    _eventId: Types.ObjectId,
    body: CreateTeamDto,
  ): Promise<any> {
    const total = await this.teamModel.countDocuments({
      company: _companyId,
      event: _eventId,
    });

    body['_uniqueId'] = `${_companyId}:${_eventId}:${total + 1}`;
    body['uniqueId'] = `${total + 1}`;

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
