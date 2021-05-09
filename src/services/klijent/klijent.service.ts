import { ApiResponse } from './../../misc/api.response.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Klijent } from "entities/klijent.entity";
import { Repository } from "typeorm";
import { AddKlijentDto } from 'src/dtos/klijent/add.klijent.dto';

@Injectable()
export class KlijentService extends TypeOrmCrudService<Klijent>{
   constructor(@InjectRepository(Klijent) private readonly klijent:Repository<Klijent> // evidentirati u app modulu
   ){
       super(klijent);
   }

    createFullKlijent(data: AddKlijentDto): Promise <Klijent | ApiResponse>{
       let newKlijent: Klijent = new Klijent();
       newKlijent.klijentId=data.klijentID;
       newKlijent.imeKlijent=data.imeKlijent;
       newKlijent.prezimeKlijent=data.prezimeKlijent;
       newKlijent.jmbgKlijent=data.jmbgKlijent;
       newKlijent.adresaKlijent=data.adresaKlijent;
       newKlijent.kontaktKlijent=data.kontaktKlijent;
       newKlijent.usernameKlijent=data.usernameKlijent;
       newKlijent.lozinkaKlijent=data.lozinkaKlijent;
       

       return new Promise ((resolve)=>{
        this.klijent.save(newKlijent)
        .then(data=> resolve(data))
        .catch(error =>{
            const response:ApiResponse = new ApiResponse("error",-1001);

            resolve(response);

        });

    });
   
}




}
