export class JwtDataZaposleniDto{
    zaposleniId: number;
    username: string;
    ext: number; // UNIX TIMESTAMP
    ip:string;
    ua:string; // user agent

    toPlainObject(){

        return{
            zaposleniId:this.zaposleniId,
            username:this.username,
            ext:this.ext,
            ip:this.ip,
            ua:this.ua


        }
    }
}