import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Name: Ticket API Service \nVersion: 0.0.19\nStatus: Running';
  }
}
