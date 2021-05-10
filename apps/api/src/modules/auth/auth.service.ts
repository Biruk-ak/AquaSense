/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Auth service
 * @copyright Biruk-ak
 */

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserAccountService } from '../users/services/user-account.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly users: UserAccountService,
    private readonly jwt: JwtService,
  ) {}

  async validateUser(email: string, _password: string) {
    const result = await this.users.searchByText(email, 1);
    const user = result[0];
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return user;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = {
      sub: user.id,
      email: (user as any).email,
      roles: String((user as any).roles || '').split(','),
    };
    return {
      accessToken: await this.jwt.signAsync(payload),
      user: user.toPublicView(),
    };
  }
}
