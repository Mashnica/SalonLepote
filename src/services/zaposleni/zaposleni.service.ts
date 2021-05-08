import { Zaposleni } from './../../../entities/zaposleni.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ZaposleniService {
     constructor(
         @InjectRepository(Zaposleni) 
         private readonly zaposleni: Repository<Zaposleni>,
     ){ }
    
     getAll(): Promise<Zaposleni[]>{ //niz zaposleni koji su administratori
        return this.zaposleni.find();
     }


    getById(id:number): Promise<Zaposleni> {
        return this.zaposleni.findOne(id);

    }
}
