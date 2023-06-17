import { Post, Body, Req, Res, Get, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferDto } from './dto/offer.dto';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post('add')
  add(@Body() dto: OfferDto, @Req() req) {
    return this.offerService.add(dto, req);
  }

  @Get('random')
  random(@Query('q') q: string, @Req() req) {
    return this.offerService.random(q, req);
  }
}
