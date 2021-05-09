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
}
