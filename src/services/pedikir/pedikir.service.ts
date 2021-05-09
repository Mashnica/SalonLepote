import { ApiResponse } from './../../misc/api.response.class';
import { AddPedikirDto } from './../../dtos/pedikir/add.pedikir.dto';
import { Pedikir } from './../../../entities/pedikir.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";

@Injectable()
export class PedikirService extends TypeOrmCrudService<Pedikir>{
   constructor(@InjectRepository(Pedikir) private readonly pedikir:Repository<Pedikir> // evidentirati u app modulu
   ){
       super(pedikir);
   }
   createPedikir(data: AddPedikirDto): Promise <Pedikir| ApiResponse>{
    let newPedikir: Pedikir = new Pedikir();
    

    return new Promise ((resolve)=>{
     this.pedikir.save(newPedikir)
     .then(data=> resolve(data))
     .catch(error =>{
         const response:ApiResponse = new ApiResponse("error",-1001);

         resolve(response);

     });

 });

}
}
