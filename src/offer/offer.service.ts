import { Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { OfferDto } from './dto/offer.dto';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class OfferService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async add(dto: OfferDto, @Req() req: Request) {
    const { offerName, description, price } = dto;
    const token = req.cookies.token;

    let createdById: string | undefined;

    if (token) {
      const decodedToken = this.jwt.decode(token) as { sub: string };
      createdById = decodedToken['id'];

      await this.prisma.offer.create({
        data: {
          offerName,
          description,
          price,
          createdById,
        },
      });

      return { message: 'New offer has been added' };
    }
    throw new UnauthorizedException();
  }
}
