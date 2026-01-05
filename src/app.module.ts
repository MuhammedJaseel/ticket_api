import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Compaines, CompainesSchema } from './schemas/compaines.schema';
import { UsersController } from './controllers/users.controller';
import { AuthController } from './controllers/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { CompanyService } from './services/company.services';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({ uri: process.env.MONGODB_URI }),
    }),
    MongooseModule.forFeature([
      { name: Compaines.name, schema: CompainesSchema },
    ]),
  ],
  controllers: [AppController, AuthController, UsersController],
  providers: [AppService, JwtService, CompanyService],
})
export class AppModule {}
