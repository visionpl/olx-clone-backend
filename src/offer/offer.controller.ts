import { Post, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferDto } from './dto/offer.dto';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post('add')
  add(@Body() dto: OfferDto) {
    return this.offerService.add(dto);
  }
}
