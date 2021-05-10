import { KlijentService } from './../services/klijent/klijent.service';
import { jwtSecret } from './../../config/jwt.secret';
import { JwtDataDto } from '../dtos/auth/jwt.data.dto';
import { ZaposleniService } from './../services/zaposleni/zaposleni.service';
import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';


@Injectable()
export class AuthMiddleware implements NestMiddleware{
    //proces proveravanje tokena 
    constructor(
        public   zaposleniService: ZaposleniService ,
        public   klijentService: KlijentService, 

        ){ }


    async use(req: Request, res: Response, next: NextFunction) {
       
        if( !req.headers.authorization){
             throw new HttpException('Token not found',HttpStatus.UNAUTHORIZED);

        }

        const token= req.headers.authorization;

        const tokenParts=token.split(' ');
        if(tokenParts.length !=2 ){
            throw new HttpException('Bad token',HttpStatus.UNAUTHORIZED);


        }

        const tokenString = tokenParts[1]; //drugi u nizu


        const jwtData: JwtDataDto= jwt.verify(token,jwtSecret);

        if(!jwtData){
            throw new HttpException('Bad token',HttpStatus.UNAUTHORIZED);


        }

        const ip =req.ip.toString();

        if(jwtData.ip !== req.ip.toString()){


            throw new HttpException('Bad token',HttpStatus.UNAUTHORIZED);

        }
        if(jwtData.ua !== req.headers["user-agent"]){

            
            throw new HttpException('Bad token',HttpStatus.UNAUTHORIZED);

        }
         
        if(jwtData.role ==="zaposleni"){
            const zaposleni = await this.zaposleniService.getById(jwtData.id);
            if(!zaposleni){

                throw new HttpException('Acount not found!',HttpStatus.UNAUTHORIZED);
            }
        }else if(jwtData.role ==="klijent"){
            const klijent = await this.klijentService.getById(jwtData.id);

            if(!klijent){

                throw new HttpException('Acount not found!',HttpStatus.UNAUTHORIZED);
            }


        }

        let sada=new Date(); 
        const trenutnoTimestamp = new Date().getTime()/1000;
           if(trenutnoTimestamp >= jwtData.ext){
            throw new HttpException('The token has expired!',HttpStatus.UNAUTHORIZED);

        }





        next();
    }
      




}