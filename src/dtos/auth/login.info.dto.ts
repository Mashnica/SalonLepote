export class LoginInfoDto{
    id: number;
    identity: string;
    token:string;

    //nesto jos treba refresh token



    constructor(id:number,identity:string,jwt:string){
        this.id=id;
        this.identity=identity;
        this.token=jwt;


    }



}