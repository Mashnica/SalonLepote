import { type } from "os";

export class JwtDataDto{

    //Proverava da li je neki korisnik zaposleni ili klijent
    role: "zaposleni"|"klijent"; //enum tipa
    id: number;
    identity: string;
    ext: number; // UNIX TIMESTAMP
    ip:string;
    ua:string; // user agent

    toPlainObject(){

        return{
            role:this.role,
            zaposleniId:this.id,
            identity:this.identity,
            ext:this.ext,
            ip:this.ip,
            ua:this.ua


        }
    }
}