import * as Validator from 'class-validator';

export class AddZaposleniDto{
    imeZaposlenog:string;
    prezimeZaposlenog:string;
    jmbgZaposlenog: string;

    @Validator.IsNotEmpty()
    @Validator.IsString()
    korisnickoIme: string;

    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.Length(6,128)
    password:string
   


}