import { jwtSecret } from './../../config/jwt.secret';
import { JwtDataZaposleniDto } from './../dtos/zaposleni/jwt.data.zaposleni.dto';
import { ZaposleniService } from './../services/zaposleni/zaposleni.service';
import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';


@Injectable()
export class AuthMiddleware implements NestMiddleware{
    //proces proveravanje tokena 
    constructor(private readonly  zaposleniService: ZaposleniService ){


    }


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


        const jwtData: JwtDataZaposleniDto= jwt.verify(token,jwtSecret);

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
        const zaposleni = await this.zaposleniService.getById(jwtData.zaposleniId);
        if(!zaposleni){

            throw new HttpException('Acount not found!',HttpStatus.UNAUTHORIZED);
        }

        let sada=new Date(); 
        const trenutnoTimestamp = new Date().getTime()/1000;
           

        if(trenutnoTimestamp >= jwtData.ext){
            throw new HttpException('The token has expired!',HttpStatus.UNAUTHORIZED);

        }





        next();
    }
      




}