
import { ApiResponse } from './../../misc/api.response.class';
import { EditZaposleniDto } from './../../dtos/zaposleni/edit.zaposleni.dto';
import { AddZaposleniDto } from './../../dtos/zaposleni/add.zaposleni.dto';
import { Zaposleni } from './../../../entities/zaposleni.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
 import * as crypto from 'crypto';  



@Injectable()
export class ZaposleniService {
     constructor(
         @InjectRepository(Zaposleni) 
         private readonly zaposleni: Repository<Zaposleni>,
     ){ }
    
     getAll(): Promise<Zaposleni[]>{ //niz zaposleni koji su administratori
        return this.zaposleni.find();
     }
     async getByUsername(korisnickoIme2:string): Promise<Zaposleni | null> {
           const admin= await this.zaposleni.findOne({
               korisnickoIme:korisnickoIme2
           });

           if(admin){
                return admin;

           }
           return null;
        }

    getById(id:number): Promise<Zaposleni> {
        return this.zaposleni.findOne(id);

    }

   //add
   add(data : AddZaposleniDto): Promise<Zaposleni | ApiResponse>{
        //DTO u model
        //SHA512 hashovanje lozinke

       const lozinka=crypto.createHash('sha512');
       lozinka.update(data.password);
       const passwordHashString= lozinka.digest('hex').toUpperCase();
        
       let newZaposleni: Zaposleni = new Zaposleni();
       newZaposleni.imeZaposlenog=data.imeZaposlenog;
       newZaposleni.prezimeZaposlenog=data.prezimeZaposlenog;
       newZaposleni.jmbgZaposlenog=data.jmbgZaposlenog;
       newZaposleni.korisnickoIme=data.korisnickoIme;
       newZaposleni.lozinka=data.password;

       return new Promise ((resolve)=>{
           this.zaposleni.save(newZaposleni)
           .then(data=> resolve(data))
           .catch(error =>{
               const response:ApiResponse = new ApiResponse("error",-1001);

               resolve(response);

           });

       });


        



   }



   //editById
    async editById(id:number,data:EditZaposleniDto): Promise<Zaposleni | ApiResponse>{
       
     let zaposleni:Zaposleni = await this.zaposleni.findOne(id);
     if(zaposleni == undefined){
           return new Promise((resolve)=>{

             resolve(new ApiResponse("error",-1002));

           });


     }
     /*const crypto =require('crypto');
     const lozinka=crypto.createHash('sha512');
     lozinka.update(data.password);
     const passwordHashString= lozinka.digest('hex').toUpperCase();

     zaposleni.lozinka = passwordHashString;*/

     return this.zaposleni.save(zaposleni);

    
   }


   //deleteById
}
