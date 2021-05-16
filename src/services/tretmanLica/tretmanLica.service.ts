/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { ApiResponse } from './../../misc/api.response.class';
import { AddTretmanLicaDto } from './../../dtos/tretmanLica/add.tretmanlica.dto';
import { Tretmanlica } from './../../../entities/tretmanlica.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TretmanLicaService extends TypeOrmCrudService<Tretmanlica>{
   constructor(@InjectRepository(Tretmanlica) private readonly tretmanLica:Repository<Tretmanlica> // evidentirati u app modulu
   ){
       super(tretmanLica);
   }

   createTretmanLica(data: AddTretmanLicaDto): Promise <Tretmanlica | ApiResponse>{
    let newTretmanLica: Tretmanlica = new Tretmanlica();
    newTretmanLica.vrstaTretmanaLica=data.VrstaTretmanaLica;
    newTretmanLica.vremeTrajTretmanaLica=data.VremeTrajTretmanaLica;
    newTretmanLica.cenaTretmanaLica=data.CenaTretmanaLica;
  

    return new Promise ((resolve)=>{
     this.tretmanLica.save(newTretmanLica)
     .then(data=> resolve(data))
     .catch(error =>{
         const response:ApiResponse = new ApiResponse("error",-1001);

         resolve(response);

     });

 });

}
}
