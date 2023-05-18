import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';
import { OfferModule } from './offer/offer.module';

@Module({
  imports: [AuthModule, PrismaModule, OfferModule],
})
export class AppModule {}
