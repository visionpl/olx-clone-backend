import { Injectable } from '@nestjs/common';
import { OfferDto } from './dto/offer.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class OfferService {
  constructor(private prisma: PrismaService) {}

  async add(dto: OfferDto) {
    const { offerName, description, price } = dto;

    await this.prisma.offer.create({
      data: {
        offerName,
        description,
        price,
      },
    });

    return { message: 'New offer has been added' };
  }
}
