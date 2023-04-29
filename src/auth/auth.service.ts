import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async signup() {
    return { message: 'signup message' };
  }

  async signin() {
    return '';
  }

  async singout() {
    return '';
  }
}
