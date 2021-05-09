import { Tretmanlica } from './../../../entities/tretmanlica.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TretmanLicaService extends TypeOrmCrudService<Tretmanlica>{
   constructor(@InjectRepository(Tretmanlica) private readonly tretmanLica:Repository<Tretmanlica> // evidentirati u app modulu
   ){
       super(tretmanLica);
   }
}
