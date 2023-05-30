import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class OfferDto {
  @IsNotEmpty()
  public offerName: string;

  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  @IsNumber()
  public price: number;

  @IsEmail()
  public userEmail: string;

  @IsNumber()
  public categoryId: number;

  @IsNumber()
  public districtId: number;

  @IsNumber()
  public conditionId: number;
}
