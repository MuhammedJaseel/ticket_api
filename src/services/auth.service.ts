import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  companyLogin(): any {
    return 'Name: Ticket API Service \nVersion: 0.0.2\nStatus: Running';
  }
}
