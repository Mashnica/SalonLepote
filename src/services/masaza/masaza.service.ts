import { ApiResponse } from './../../misc/api.response.class';
import { AddMasazaDto } from './../../dtos/masaza/add.masaza.dto';
import { Masaza } from './../../../entities/masaza.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";

@Injectable()
export class MasazaService extends TypeOrmCrudService<Masaza>{
   constructor(@InjectRepository(Masaza) private readonly masaza:Repository<Masaza> // evidentirati u app modulu
   ){
       super(masaza);
    }

    createMasaza(data: AddMasazaDto): Promise <Masaza | ApiResponse>{
        let newMasaza: Masaza = new Masaza();
        newMasaza.masazaId=data.masazaID;
        newMasaza.vrstaMasaze=data.VrstaMasaze;
        newMasaza.vremeTraj=data.VremeTraj;
        newMasaza.cenaMasaze=data.CenaMasaze;
        
 
        return new Promise ((resolve)=>{
         this.masaza.save(newMasaza)
         .then(data=> resolve(data))
         .catch(error =>{
             const response:ApiResponse = new ApiResponse("error",-1001);
 
             resolve(response);
 
         });
 
     });
    
 }
}
