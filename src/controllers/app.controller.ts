/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ZaposleniService } from '../services/zaposleni/zaposleni.service';
import { Zaposleni } from '../../entities/zaposleni.entity';
import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
   //u konstruktoru controlera ukljuciti servise
   constructor(
     private zaposleniService: ZaposleniService
   ){}

  @Get() //http://localhost:3000
  getHello(): string {
    return 'Home Page!!';
  }


 

}