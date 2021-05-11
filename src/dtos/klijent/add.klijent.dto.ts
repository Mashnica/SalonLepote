import * as Validator from 'class-validator';
 export class AddKlijentDto{
    klijentID:number
    imeKlijent : string;
    prezimeKlijent: string;
    jmbgKlijent :string;
    adresaKlijent :string;
    kontaktKlijent :string;

    @Validator.IsNotEmpty()
    @Validator.IsString()
    usernameKlijent :string;
    
    @Validator.IsNotEmpty()
    @Validator.IsString()
    lozinkaKlijent :string;




}