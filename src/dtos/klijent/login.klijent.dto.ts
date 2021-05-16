/* eslint-disable prettier/prettier */
import * as Validator from 'class-validator';

export class LoginKlijentDto{
    @Validator.IsNotEmpty()
    @Validator.IsString()
    usernameKlijent :string;


    @Validator.IsNotEmpty()
    @Validator.IsString()
    lozinkaKlijent :string;



}