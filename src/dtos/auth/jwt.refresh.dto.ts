/* eslint-disable prettier/prettier */
export class JwtRefreshDataDto{

    //Proverava da li je  zaposleni ili klijent
    role: "zaposleni"|"klijent"; //enum tipa
    id: number;
    identity: string;
    exp: number; // UNIX TIMESTAMP
    ip:string;
    ua:string; // user agent

    toPlainObject(){

        return{
            role:this.role,
            zaposleniId:this.id,
            identity:this.identity,
            exp:this.exp,
            ip:this.ip,
            ua:this.ua


        }
    }
}