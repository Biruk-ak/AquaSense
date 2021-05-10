/**
 * AquaSense — Water Utility & Infrastructure Management Platform
 * Auth tests
 * @copyright Biruk-ak
 */

import { Test } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAccountService } from '../users/services/user-account.service';

describe('AuthService', () => {
  let service: AuthService;
  const users = { searchByText: jest.fn() };
  const jwt = { signAsync: jest.fn(async () => 'token') };

  beforeEach(async () => {
    const mod = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserAccountService, useValue: users },
        { provide: JwtService, useValue: jwt },
      ],
    }).compile();
    service = mod.get(AuthService);
    jest.clearAllMocks();
  });

  it('logs in a valid user', async () => {
    users.searchByText.mockResolvedValueOnce([{
      id: 'u1',
      email: 'a@b.com',
      roles: 'admin',
      toPublicView: () => ({ id: 'u1', email: 'a@b.com' }),
    }]);
    const result = await service.login('a@b.com', 'password123');
    expect(result.accessToken).toBe('token');
  });

  it('rejects unknown users', async () => {
    users.searchByText.mockResolvedValueOnce([]);
    await expect(service.login('x@y.com', 'password123')).rejects.toBeInstanceOf(UnauthorizedException);
  });
});
