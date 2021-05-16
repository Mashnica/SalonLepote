/* eslint-disable prettier/prettier */
import * as Validator from 'class-validator';
export class AddTerminDto{
    terminID :number;
    brojTermina :string;
    datumTermina :Date;
  @Validator.IsEmpty()
  @Validator.IsNumber({
    allowInfinity:false,
    allowNaN: false,
  })
  @Validator.IsPositive()
  Cena :number;
    zaposleni:{
        zaposleniId:number,
       //dodati ostale strane kljuceve
    }
    uslugesalona:{
        uslugesalonaId:number,
       //dodati ostale strane kljuceve
    }


}