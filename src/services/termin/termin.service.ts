import { AddTerminDto } from './../../dtos/termin/add.termin.dto';
import { ApiResponse } from './../../misc/api.response.class';
import { Termin } from './../../../entities/termin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TerminService extends TypeOrmCrudService<Termin>{
   constructor(@InjectRepository(Termin) private readonly  termin:Repository<Termin> // evidentirati u app modulu
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