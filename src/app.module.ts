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
import { UserController } from './controllers/user.controller';
import { JwtService } from '@nestjs/jwt';
import { CompanyService } from './services/company.services';
import { NextFunction, Request } from 'express';
import { CompanyController } from './controllers/company.controller';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({ uri: process.env.MONGODB_URI }),
    }),
    MongooseModule.forFeature([
      { name: Compaines.name, schema: CompainesSchema },
    ]),
  ],
  controllers: [AppController, CompanyController, UserController],
  providers: [AppService, JwtService, CompanyService],
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
