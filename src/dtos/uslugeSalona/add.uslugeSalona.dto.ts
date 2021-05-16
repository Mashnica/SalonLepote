/* eslint-disable prettier/prettier */

import * as Validator from 'class-validator';
export class AddUslugeSalonaDto{
    uslugeSalonaID :number;
    @Validator.IsEmpty()
    @Validator.IsString()
    @Validator.Length(1,30)
    VrstaUslugeSalona :string;
    VremeTrajanja :number;
    dostupnost :boolean;
    masaza:{
        masazaId:number,
       //dodati ostale strane kljuceve
    }
    




}