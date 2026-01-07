import {
  Injectable,
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Compaines, CompainesSchema } from './schemas/compaines.schema';
import { JwtService } from '@nestjs/jwt';
import { CompanyService } from './services/company.services';
import { NextFunction, Request } from 'express';
import { CompanyController } from './controllers/company.controller';
import { EventController } from './controllers/event.controller';
import { AuthController } from './controllers/auth.controller';
import { EventService } from './services/event.services';
import { Events, EventsSchema } from './schemas/events.schema';
import { Teams, TeamsSchema } from './schemas/team.schema';
import { Users, UsersSchema } from './schemas/users.schema';
import { TeamService } from './services/team.services';
import { UserService } from './services/user.services';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({ uri: process.env.MONGODB_URI }),
    }),
    MongooseModule.forFeature([
      { name: Compaines.name, schema: CompainesSchema },
      { name: Events.name, schema: EventsSchema },
      { name: Teams.name, schema: TeamsSchema },
      { name: Users.name, schema: UsersSchema },
    ]),
  ],
  controllers: [
    AppController,
    AuthController,
    CompanyController,
    EventController,
  ],
  providers: [
    AppService,
    JwtService,
    CompanyService,
    EventService,
    TeamService,
    UserService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CompanyMiddleware).forRoutes('/api/company*');
    consumer.apply(UsersMiddleware).forRoutes('/api/users*');
  }
}

@Injectable()
export class CompanyMiddleware implements NestMiddleware {
  constructor(private jwt: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const secret = 'companysecret';
    let decoded: any = {};
    try {
      decoded = this.jwt.verify(req.headers.authorization, { secret });
      req['reqId'] = decoded.id;
    } catch (error) {
      throw new UnauthorizedException('Anuthorized access, invalid token');
    }
    next();
  }
}

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  constructor(private jwt: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const secret = 'companysecret';
    let decoded: any = {};
    try {
      decoded = this.jwt.verify(req.headers.authorization, { secret });
      req['reqId'] = decoded.id;
    } catch (error) {
      throw new UnauthorizedException('Anuthorized access, invalid token');
    }
    next();
  }
}
