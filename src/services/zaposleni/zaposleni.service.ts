import { EditZaposleniDto } from './../../dtos/zaposleni/edit.zaposleni.dto';
import { AddZaposleniDto } from './../../dtos/zaposleni/add.zaposleni.dto';
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

   //add
   add(data : AddZaposleniDto): Promise<Zaposleni>{
       const crypto =require('crypto');

       const lozinka=crypto.createHash('sha512');
       lozinka.update(data.password);
       const passwordHashString= lozinka.digest('hex').toUppeCase();
        
       let newZaposleni: Zaposleni = new Zaposleni();
       newZaposleni.imeZaposlenog=data.imeZaposlenog;
       newZaposleni.prezimeZaposlenog=data.prezimeZaposlenog;
       newZaposleni.jmbgZaposlenog=data.jmbgZaposlenog;
       newZaposleni.korisnickoIme=data.korisnickoIme;
       newZaposleni.lozinka=data.password;

       return this.zaposleni.save(newZaposleni);


        //DTO u model
        //SHA512 hashovanje lozinke



   }



   //editById
    async editById(id:number,data:EditZaposleniDto): Promise<Zaposleni>{
       
     let zaposleni:Zaposleni = await this.zaposleni.findOne(id);
     const crypto =require('crypto');
     const lozinka=crypto.createHash('sha512');
     lozinka.update(data.password);
     const passwordHashString= lozinka.digest('hex').toUppeCase();

     zaposleni.lozinka = passwordHashString;

     return this.zaposleni.save(zaposleni);

    
   }


   //deleteById
}
