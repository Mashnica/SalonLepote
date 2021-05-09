import { ApiResponse } from './../../misc/api.response.class';
import { AddRacunDto } from './../../dtos/racun/add.racun.dto';
import { Racun } from './../../../entities/racun.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";

@Injectable()
export class RacunService extends TypeOrmCrudService<Racun>{
   constructor(@InjectRepository(Racun) private readonly racun:Repository<Racun> // evidentirati u app modulu
   ){
       super(racun);
   }


   createRacun(data: AddRacunDto): Promise <Racun | ApiResponse>{
    let newRacun: Racun = new Racun();
    newRacun.racunId=data.racunID;
    newRacun.brRacuna=data.BrRacuna;
    newRacun.tipRacuna=data.TipRacuna;
    
    

    return new Promise ((resolve)=>{
     this.racun.save(newRacun)
     .then(data=> resolve(data))
     .catch(error =>{
         const response:ApiResponse = new ApiResponse("error",-1001);

         resolve(response);

     });

 });
   }
}
