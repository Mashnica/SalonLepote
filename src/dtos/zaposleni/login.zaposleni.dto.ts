/* eslint-disable prettier/prettier */
import * as Validator from 'class-validator';
    
    export class LoginZaposleniDto{
        @Validator.IsNotEmpty()
        @Validator.IsString()
        korisnickoIme: string;

        @Validator.IsNotEmpty()
        @Validator.IsString()
        @Validator.Length(6,128)
        password:string
   
    
    }