import { Uslugesalona } from './../../../entities/uslugesalona.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UslugeSalonaService extends TypeOrmCrudService<Uslugesalona>{
   constructor(@InjectRepository(Uslugesalona) private readonly uslugesalona:Repository<Uslugesalona> // evidentirati u app modulu
   ){
       super(uslugesalona);
   }
}