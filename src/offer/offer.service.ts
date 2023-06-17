import { Injectable, Query, Req, UnauthorizedException } from '@nestjs/common';
import { OfferDto } from './dto/offer.dto';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class OfferService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async add(dto: OfferDto, @Req() req: Request) {
    const {
      offerName,
      description,
      price,
      userEmail,
      categoryId,
      districtId,
      conditionId,
      phoneNumber,
    } = dto;
    const token = req.cookies.token;

    if (token) {
      await this.prisma.offer.create({
        data: {
          offerName,
          description,
          price,
          userEmail,
          categoryId,
          districtId,
          conditionId,
          phoneNumber,
        },
      });

      return { message: 'New offer has been added' };
    }
    throw new UnauthorizedException();
  }

  // async random(@Query('q') q: string, @Req() req: Request) {
  //   const token = req.cookies.token;
  //   const quantity = q;

  //   if (token) {
  //     return this.prisma.offer.findMany({
  //       take: +quantity || 1,
  //       orderBy: {
  //         random: true,
  //       },
  //     });
  //   }
  //   throw new UnauthorizedException();
  // }
  async random(@Query('q') q: string, @Req() req: Request) {
    const token = req.cookies.token;
    const quantity = +q || 1;

    if (token) {
      const offers = await this.prisma.offer.findMany();
      const randomOffers = this.getRandomElements(offers, quantity);
      return randomOffers;
    }

    throw new UnauthorizedException();
  }

  getRandomElements<T>(arr: T[], quantity: number): T[] {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, quantity);
  }
}
