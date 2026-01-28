import { IsEmail, IsString, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(9, 255)
  public username: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(9, 255)
  public email: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 255)
  public password: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 255)
  public confirmPassword: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 255)
  public fullName: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 255)
  public dateOfBirth: string;

  @IsString()
  @IsNotEmpty()
  @Length(9, 255)
  public avatarImageUrl: string;
}
