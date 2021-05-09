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
}
