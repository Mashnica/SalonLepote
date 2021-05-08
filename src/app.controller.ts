import { ZaposleniService } from './services/zaposleni/zaposleni.service';
import { Zaposleni } from './../entities/zaposleni.entity';
import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
   //u konstruktoru controlera ukljuciti servise
   constructor(
     private zaposleniService: ZaposleniService
   ){}

  @Get() //http://localhost:3000
  getHello(): string {
    return 'Hello World!';
  }


  @Get('api/zaposleni')   //http:localhost:3000/api/zaposleni/
  getAllZaposleni():Promise<Zaposleni[]>{
      
   return  this.zaposleniService.getAll();
  }

}