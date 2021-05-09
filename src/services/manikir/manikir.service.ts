import { Manikir } from '../../../entities/manikir.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ManikirService extends TypeOrmCrudService<Manikir>{
   constructor(@InjectRepository(Manikir) private readonly manikir:Repository<Manikir> // evidentirati u app modulu
   ){
       super(manikir);
   }
}
