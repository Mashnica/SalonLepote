//prilikom editovanja zaposlenog dopustamo da se promeni njegov password
import * as Validator from 'class-validator';


export class EditZaposleniDto{
    @Validator.IsNotEmpty()
    @Validator.IsString()
    @Validator.Length(6,128)
    password:string


}