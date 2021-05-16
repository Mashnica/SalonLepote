/* eslint-disable prettier/prettier */
import * as Validator from 'class-validator';
export class AddManikirDto{
    manikirID :number;
    VrstaManikira : string;
    VremeTrajManikir :number;
    @Validator.IsEmpty()
    @Validator.IsNumber({
       allowInfinity:false,
       allowNaN: false,
     })
    @Validator.IsPositive()
    CenaManikira :number;



}