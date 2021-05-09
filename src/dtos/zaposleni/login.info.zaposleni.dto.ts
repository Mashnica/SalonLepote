export class LoginInfoZaposleniDto{
    zaposleniID: number;
    username: string;
    token:string;


    constructor(id:number,username:string,jwt:string){
        this.zaposleniID=id;
        this.username=username;
        this.token=jwt;


    }



}