/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { KlijentRegistrationDto } from './../../dtos/klijent/klijent.register.dto';
import { ApiResponse } from './../../misc/api.response.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Klijent } from "entities/klijent.entity";
import { Repository } from "typeorm";
import { AddKlijentDto } from 'src/dtos/klijent/add.klijent.dto';
import * as crypto from 'crypto';

@Injectable()
export class KlijentService extends TypeOrmCrudService<Klijent>{
   constructor(@InjectRepository(Klijent) private readonly klijent:Repository<Klijent> // evidentirati u app modulu
   ){
       super(klijent);
   }


   async register(data:KlijentRegistrationDto): Promise<Klijent|ApiResponse>{
    const lozinka=crypto.createHash('sha512');
    lozinka.update(data.lozinkaKlijent);
    const passwordHashString= lozinka.digest('hex').toUpperCase();



    const newKlijent:Klijent=new Klijent();
    newKlijent.usernameKlijent=data.usernameKlijent;
    newKlijent.lozinkaKlijent=passwordHashString;
    newKlijent.imeKlijent=data.imeKlijent;
    newKlijent.prezimeKlijent=data.prezimeKlijent;
    newKlijent.jmbgKlijent=data.jmbgKlijent;
    newKlijent.kontaktKlijent=data.kontaktKlijent;
    newKlijent.adresaKlijent=data.adresaKlijent;
    


    try{

        const saveKlijent = await this.klijent.save(newKlijent);
        if(!saveKlijent){
               throw new Error('');
        }
        return saveKlijent;

    }catch(e){

      return new ApiResponse('error',-6001,'This user account cannot be created.');
    }

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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch(error =>{
            const response:ApiResponse = new ApiResponse("error",-1001);

            resolve(response);

        });

    });
   
    }
    async getById(id){
        return await this.klijent.findOne(id);

    }
    async getByUsername(korisnickoIme2:string): Promise<Klijent | null> {
        const klijent = await this.klijent.findOne({
            usernameKlijent:korisnickoIme2
        });

        if(klijent){
             return klijent;

        }
        return null;
     }





}
