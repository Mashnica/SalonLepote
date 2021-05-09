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
}
