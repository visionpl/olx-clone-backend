import { IsNotEmpty, IsNumber } from 'class-validator';

export class OfferDto {
  @IsNotEmpty()
  public offerName: string;

  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  @IsNumber()
  public price: number;
}
