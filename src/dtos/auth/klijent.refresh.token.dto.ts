/* eslint-disable prettier/prettier */
import * as Validator from 'class-validator';
export class KlijentRefreshTokenDto{
    @Validator.IsNotEmpty()
    @Validator.IsString()
    token:string;

}