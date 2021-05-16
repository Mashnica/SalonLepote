/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Tretmanlica } from './../../../entities/tretmanlica.entity';
import { Pedikir } from './../../../entities/pedikir.entity';
import { Manikir } from './../../../entities/manikir.entity';
import { Masaza } from './../../../entities/masaza.entity';
import { ApiResponse } from './../../misc/api.response.class';
import { Uslugesalona } from './../../../entities/uslugesalona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { AddUslugeSalonaDto } from 'src/dtos/uslugeSalona/add.uslugeSalona.dto';

@Injectable()
export class UslugeSalonaService extends TypeOrmCrudService<Uslugesalona>{
   constructor(
       @InjectRepository(Uslugesalona)
        private readonly uslugesalona:Repository<Uslugesalona>, // evidentirati u app modulu
        @InjectRepository(Masaza)
        private readonly masaza:Repository<Masaza>,
        @InjectRepository(Manikir)
        private readonly manikir:Repository<Manikir>,
        @InjectRepository(Pedikir)
        private readonly pedikir:Repository<Pedikir>,
        @InjectRepository(Tretmanlica)
        private readonly tretmanlica:Repository<Tretmanlica>,

       
       ){
       super(uslugesalona);
   }

   createUslugeSalona(data: AddUslugeSalonaDto): Promise <Uslugesalona| ApiResponse>{
    let newUslugaSalona: Uslugesalona = new Uslugesalona();
    newUslugaSalona.uslugeSalonaId=data.uslugeSalonaID;
    newUslugaSalona.vrstaUslugeSalona=data.VrstaUslugeSalona;
    newUslugaSalona.vremeTrajanja=data.VremeTrajanja;
    newUslugaSalona.dostupnost=data.dostupnost;

    

    return new Promise ((resolve)=>{
     this.uslugesalona.save(newUslugaSalona)
     .then(data=> resolve(data))
     .catch(error =>{
         const response:ApiResponse = new ApiResponse("error",-1001);

         resolve(response);

     });


 });
 

}
}