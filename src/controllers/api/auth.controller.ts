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
import {Controller,Post,Body, Req, Put } from '@nestjs/common';
import { LoginKlijentDto } from 'src/dtos/klijent/login.klijent.dto';




@Controller('auth')
export class AuthController{

    constructor(public zaposleniService: ZaposleniService,
               public klijentService: KlijentService
        ){}
     //mehanizam logovanja admina zaposlenog
     @Post('zaposleni/login') //http://localhost:300/auth/zaposleni/login/
    async doZaposleniLogin(@Body() data :LoginZaposleniDto,@Req() req: Request): Promise<LoginInfoDto | ApiResponse>{

        const admin = await this.zaposleniService.getByUsername(data.korisnickoIme);

        if(!admin){
            return new Promise(resolve=>resolve(new ApiResponse('error',-3001)));//admin ne postoji
            


        }
        const lozinka=crypto.createHash('sha512');
        lozinka.update(data.password);
        const passwordHashString= lozinka.digest('hex').toUpperCase();

        if(admin.lozinka!== passwordHashString){
            return new Promise(resolve=>resolve(new ApiResponse('error',-3002)));//admin lozinka nije ispravna


        }

        //zaposleniID
        //korisnickoIme
        //token JWT 
        //tajni kod sifra json
 
        const jwtData = new JwtDataDto();
        jwt.role="zaposleni";
        jwtData.id=admin.zaposleniId;
        jwtData.identity=admin.korisnickoIme;
        let sada=new Date();
        sada.setDate(sada.getDate()+ 14); //14dana traje 
        const istekTimestamp = sada.getTime()/1000;
        jwtData.ext = istekTimestamp;

        jwtData.ip= req.ip.toString();
        jwtData.ua=req.headers['user-agent'];


       //sifrovano token 
        let token: string = jwt.sign(jwtData.toPlainObject(),jwtSecret);
        
        const responseObject = new LoginInfoDto(
           admin.zaposleniId,
           admin.korisnickoIme,
           token

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
        jwt.role="klijent";
        jwtData.id=klijent.klijentId;
        jwtData.identity=klijent.usernameKlijent;

        //token traje 14dana dok se ne napravi refresh token
        let sada=new Date();
        sada.setDate(sada.getDate()+ 14); //14dana traje 
        const istekTimestamp = sada.getTime()/1000;
        jwtData.ext = istekTimestamp;

        jwtData.ip= req.ip.toString();
        jwtData.ua=req.headers['user-agent'];


       //sifrovano token 
        let token: string = jwt.sign(jwtData.toPlainObject(),jwtSecret);
        
        const responseObject = new LoginInfoDto(
           klijent.klijentId,
           klijent.usernameKlijent,
           token

        );

        return new Promise(resolve => resolve(responseObject));


    }



}