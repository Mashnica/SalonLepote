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
}