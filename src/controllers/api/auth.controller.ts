import { KlijentService } from './../../services/klijent/klijent.service';
import { KlijentRegistrationDto } from './../../dtos/klijent/klijent.register.dto';
import { jwtSecret } from './../../../config/jwt.secret';
import { JwtDataZaposleniDto } from './../../dtos/zaposleni/jwt.data.zaposleni.dto';
import { LoginInfoZaposleniDto } from './../../dtos/zaposleni/login.info.zaposleni.dto';
import { ApiResponse } from './../../misc/api.response.class';
import { LoginZaposleniDto } from './../../dtos/zaposleni/login.zaposleni.dto';
import { ZaposleniService } from './../../services/zaposleni/zaposleni.service';
import {Request} from "express";
import {resolve} from "dns";
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import {Controller,Post,Body, Req, Put } from '@nestjs/common';




@Controller('auth')
export class AuthController{

    constructor(public zaposleniService: ZaposleniService,
               public klijentService: KlijentService
        ){}

     @Post('login') //http://localhost:300/auth/login
    async doLogin(@Body() data :LoginZaposleniDto,@Req() req: Request): Promise<LoginInfoZaposleniDto | ApiResponse>{

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
 
        const jwtData = new JwtDataZaposleniDto();
        jwtData.zaposleniId=admin.zaposleniId;
        jwtData.username=admin.korisnickoIme;
        let sada=new Date();
        sada.setDate(sada.getDate()+ 14); //14dana traje 
        const istekTimestamp = sada.getTime()/1000;
        jwtData.ext = istekTimestamp;

        jwtData.ip= req.ip.toString();
        jwtData.ua=req.headers['user-agent'];


       //sifrovano token 
        let token: string = jwt.sign(jwtData.toPlainObject(),jwtSecret);
        
        const responseObject = new LoginInfoZaposleniDto(
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



}