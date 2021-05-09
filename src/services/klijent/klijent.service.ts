import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Klijent } from "entities/klijent.entity";
import { Repository } from "typeorm";

@Injectable()
export class KlijentService extends TypeOrmCrudService<Klijent>{
   constructor(@InjectRepository(Klijent) private readonly klijent:Repository<Klijent> // evidentirati u app modulu
   ){
       super(klijent);
   }
}




