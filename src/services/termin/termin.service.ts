/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { AddTerminDto } from './../../dtos/termin/add.termin.dto';
import { ApiResponse } from './../../misc/api.response.class';
import { Termin } from './../../../entities/termin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { Uslugesalona } from 'entities/uslugesalona.entity';
import { Zaposleni } from 'entities/zaposleni.entity';

@Injectable()
export class TerminService extends TypeOrmCrudService<Termin>{
   constructor(
       @InjectRepository(Termin)
        private readonly  termin:Repository<Termin>,// evidentirati u app modulu
        @InjectRepository(Uslugesalona)
        private readonly  uslugesalona:Repository<Uslugesalona>,
        @InjectRepository(Zaposleni)
        private readonly  zaposleni:Repository<Zaposleni>,

   ){
       super(termin);
   }

   createTermin(data: AddTerminDto): Promise <Termin | ApiResponse>{
    let newTermin: Termin = new Termin();
    newTermin.terminId=data.terminID;
    newTermin.brojTermina=data.brojTermina;
    newTermin.datumTermina=data.datumTermina;
    newTermin.cena=data.Cena
   
    

    return new Promise ((resolve)=>{
     this.termin.save(newTermin)
     .then(data=> resolve(data))
     .catch(error =>{
         const response:ApiResponse = new ApiResponse("error",-1001);

         resolve(response);

     });

 });

}
}