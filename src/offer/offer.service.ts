import { Injectable } from '@nestjs/common';
import { OfferDto } from './dto/offer.dto';

@Injectable()
export class OfferService {
  add(dto: OfferDto) {
    const { name, price } = dto;
    // TODO: add user to db
  }
}
