/* eslint-disable prettier/prettier */
import {  JwtRefreshDataDto } from './../../dtos/auth/jwt.refresh.dto';
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { LoginInfoDto } from './../../dtos/auth/login.info.dto';
import { KlijentService } from './../../services/klijent/klijent.service';
import { KlijentRegistrationDto } from './../../dtos/klijent/klijent.register.dto';
import { jwtSecret } from './../../../config/jwt.secret';
import { JwtDataDto } from '../../dtos/auth/jwt.data.dto';
import { ApiResponse } from './../../misc/api.response.class';
import { LoginZaposleniDto } from './../../dtos/zaposleni/login.zaposleni.dto';
import { ZaposleniService } from './../../services/zaposleni/zaposleni.service';
import {Request} from "express";
import {resolve} from "dns";
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import {Controller,Post,Body, Req, Put, HttpException, HttpStatus } from '@nestjs/common';
import { LoginKlijentDto } from 'src/dtos/klijent/login.klijent.dto';
import { KlijentRefreshTokenDto } from 'src/dtos/auth/klijent.refresh.token.dto';




@Controller('auth')
export class AuthController{

    constructor(
               public zaposleniService: ZaposleniService,
               public klijentService: KlijentService,
        ){}
     //mehanizam logovanja admina zaposlenog
     @Post('zaposleni/login') //http://localhost:300/auth/zaposleni/login/
    async doZaposleniLogin(@Body() data :LoginZaposleniDto,@Req() req: Request): Promise<LoginInfoDto | ApiResponse>{
        const admin = await this.zaposleniService.getByUsername(data.korisnickoIme);
        console.log(admin);
        if(!admin){
            return new Promise(resolve=>resolve(new ApiResponse('error',-3001)));//admin ne postoji
            


        }
        //*
        const lozinka=crypto.createHash('sha512');
        lozinka.update(data.password);
        const passwordHashString= lozinka.digest('hex').toUpperCase();

        if(admin.lozinka !== passwordHashString){
            return new Promise(resolve=>resolve(new ApiResponse('error',-3002)));//admin lozinka nije ispravna


        }
        //*/
        //zaposleniID
        //korisnickoIme
        //token JWT 
        //tajni kod sifra json
 
        const jwtData = new JwtDataDto();
        jwtData.role="zaposleni";
        jwtData.id=admin.zaposleniId;
        jwtData.identity=admin.korisnickoIme;

        jwtData.exp = this.getDatePlus(60*60*24*14);

        jwtData.ip= req.ip.toString();
        jwtData.ua=req.headers['user-agent'];


       //sifrovano token 
        let token: string = jwt.sign(jwtData.toPlainObject(),jwtSecret);
        
        const responseObject = new LoginInfoDto(
           admin.zaposleniId,
           admin.korisnickoIme,
           token,
           "",
           "",

        );

        return new Promise(resolve => resolve(responseObject));


    }

    @Put('klijent/register') // PUT http://localhost:3000/auth/klijent/register/
    async klijentRegister(@Body() data:KlijentRegistrationDto){

        return await this.klijentService.register(data);


    }

    @Post('klijent/login') //http://localhost:300/auth/klijent/login/
    async doKlijentLogin(@Body() data :LoginKlijentDto,@Req() req: Request): Promise<LoginInfoDto | ApiResponse>{

        const klijent = await this.klijentService.getByUsername(data.usernameKlijent);

        if(!klijent){
            return new Promise(resolve=>resolve(new ApiResponse('error',-3001)));//klijent ne postoji
            


        }
        const lozinkaKlijent=crypto.createHash('sha512');
        lozinkaKlijent.update(data.lozinkaKlijent);
        const passwordHashString= lozinkaKlijent.digest('hex').toUpperCase();

        if(klijent.lozinkaKlijent!== passwordHashString){
            return new Promise(resolve=>resolve(new ApiResponse('error',-3002)));//klijent lozinka nije ispravna


        }

        //zaposleniID
        //korisnickoIme
        //token JWT 
        //tajni kod sifra json
 
        const jwtData = new JwtDataDto();
        jwtData.role="klijent";
        jwtData.id=klijent.klijentId;
        jwtData.identity=klijent.usernameKlijent;
        jwtData.exp = this.getDatePlus(60 * 5); //token ne sme da traje vise od 5min
        jwtData.ip= req.ip.toString();
        jwtData.ua=req.headers['user-agent'];


       //sifrovan token 
        let token: string = jwt.sign(jwtData.toPlainObject(),jwtSecret);

        const jwtRefreshData = new JwtRefreshDataDto();
        jwtRefreshData.role=jwtData.role;
        jwtRefreshData.id=jwtData.id;
        jwtRefreshData.identity=jwtData.identity;
        jwtRefreshData.exp= this.getDatePlus(60 *60 * 24 * 31); //min sat dan 31 dan u mes refresh token 
        jwtRefreshData.ip=jwtData.ip;
        jwtRefreshData.ua=jwtData.ua;
        
        //refresh token
        let refreshToken: string = jwt.sign(jwtRefreshData.toPlainObject(),jwtSecret);

        
        const responseObject = new LoginInfoDto(
           klijent.klijentId,
           klijent.usernameKlijent,
           token,
           refreshToken,
           this.getIsoDate(jwtRefreshData.exp),

        );
        
        await this.klijentService.addToken(
            klijent.klijentId,
            refreshToken,
            this.getDatabaseDateFormat(this.getIsoDate(jwtRefreshData.exp))
        );

        return new Promise(resolve => resolve(responseObject));


    }
    private getDatePlus(numberOfSeconds:number):number{

            return new Date().getTime()/1000+ numberOfSeconds;
    }

    private getIsoDate(timestamp: number ):string {
        const date = new Date();
        date.setTime(timestamp * 1000);
        return date.toISOString();
    }
    private  getDatabaseDateFormat(isoFormat:string): string {
             return isoFormat.substr(0,19).replace('T',' ');             //uzimamo 19 karaktera ukljucujuci slovo T
    }
    



    //refresh token klijent
@Post('klijent/refresh')  //http://localhost:3000/auth/klijent/refresh
async klijentTokenRefresh(@Req() req: Request,@Body() data: KlijentRefreshTokenDto) :Promise<LoginInfoDto | ApiResponse> {
        const klijentToken = await this.klijentService.getKlijentToken(data.token);
    
        if(!klijentToken){
            return new ApiResponse("error",-10002,"No such refresh token!");
        }

       if(klijentToken.isValid === 0){
        return new ApiResponse("error",-10003,"The token is no longer valid!");
       }


       const sada= new Date();
       const datumIsteka = new Date(klijentToken.expiresAt);  //vremenska zona 00


       if(datumIsteka.getTime() < sada.getTime()){
         return new ApiResponse("error",-10004,"The token has expired!");
         
       }

       let jwtRefreshData:JwtRefreshDataDto;
       try{
           jwtRefreshData = jwt.verify(data.token,jwtSecret);
       } catch(e){
           throw new HttpException('Bad token',HttpStatus.UNAUTHORIZED);
       }
       
      //token prazan
      if(!jwtRefreshData){
        throw new HttpException('Bad token',HttpStatus.UNAUTHORIZED);
        }

      if(jwtRefreshData.ip !== req.ip.toString()){


        throw new HttpException('Bad token',HttpStatus.UNAUTHORIZED);

         }
      if(jwtRefreshData.ua !== req.headers["user-agent"]){

        
        throw new HttpException('Bad token',HttpStatus.UNAUTHORIZED);

          }

          const jwtData = new JwtDataDto();
          jwt.role= jwtRefreshData.role;
          jwtData.id=jwtRefreshData.id;
          jwtData.identity=jwtRefreshData.identity;
          jwtData.exp = this.getDatePlus(60 * 5); 
          jwtData.ip= jwtRefreshData.ip;
          jwtData.ua= jwtRefreshData.ua;
  
          let token: string = jwt.sign(jwtData.toPlainObject(),jwtSecret);
          
          const responseObject = new LoginInfoDto(
            jwtData.id,
            jwtData.identity,
            token,
            data.token,
            this.getIsoDate(jwtRefreshData.exp),
 
         );

         return responseObject;
    }

}