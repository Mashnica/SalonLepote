/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { ApiResponse } from './../../misc/api.response.class';
import { Manikir } from './../../../entities/manikir.entity';
import { AddManikirDto } from './../../dtos/manikir/add.manikir.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ManikirService extends TypeOrmCrudService<Manikir>{
   constructor(@InjectRepository(Manikir) private readonly manikir:Repository<Manikir> // evidentirati u app modulu
   ){
       super(manikir);
   }
   createManikir(data: AddManikirDto): Promise <Manikir | ApiResponse>{
    let newManikir: Manikir = new Manikir();
    newManikir.manikirId=data.manikirID;
    newManikir.vrstaManikira=data.VrstaManikira;
    newManikir.vremeTrajManikir=data.VremeTrajManikir;
    newManikir.cenaManikira=data.CenaManikira;
    

    return new Promise ((resolve)=>{
     this.manikir.save(newManikir)
     .then(data=> resolve(data))
     .catch(error =>{
         const response:ApiResponse = new ApiResponse("error",-1001);

         resolve(response);

     });

 });

}
}
