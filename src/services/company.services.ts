import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Compaines } from 'src/schemas/compaines.schema';
import { Events } from 'src/schemas/events.schema';
import { TeamActivity, Teams } from 'src/schemas/team.schema';
import { RegisterCompanyDto } from 'src/types/company.dto';

@Injectable()
export class CompanyService {
  constructor(
    private jwt: JwtService,
    @InjectModel(Compaines.name) private companyModel: Model<Compaines>,
    @InjectModel(Events.name) private eventModel: Model<Events>,
    @InjectModel(Teams.name) private teamModel: Model<Teams>,
    @InjectModel(TeamActivity.name)
    private teamActivityModel: Model<TeamActivity>,
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

  async findTeamAllEvents(email: string) {
    const teams = await this.teamModel.find({ email });

    const eventIds = teams.map((it) => it.event);

    return await this.eventModel
      .find({ _id: { $in: eventIds } })
      .populate('company', 'name')
      .select('name');
  }

  getTeam(query: any) {
    return this.teamModel.findOne(query);
  }

  async markTeamLogin(id: string | Types.ObjectId) {
    const token = this.jwt.sign(
      { id, type: 'TEAM_T1' },
      { secret: 'companysecret' },
    );
    // TODO: Need to add expiry time
    const team = new Types.ObjectId(id);
    await this.teamActivityModel.create({ team, activity: 'IN' });
    return { token };
  }
}
