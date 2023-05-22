import { Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { OfferDto } from './dto/offer.dto';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class OfferService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async add(dto: OfferDto, @Req() req: Request) {
    const { offerName, description, price, userEmail, categoryId } = dto;
    const token = req.cookies.token;

    if (token) {
      await this.prisma.offer.create({
        data: {
          offerName,
          description,
          price,
          userEmail,
          categoryId,
        },
      });

      return { message: 'New offer has been added' };
    }
    throw new UnauthorizedException();
  }
}
