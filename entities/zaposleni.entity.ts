/* eslint-disable prettier/prettier */
import {
   Column,
   Entity,
   Index,
   OneToMany,
   PrimaryGeneratedColumn,
 } from "typeorm";
 import { Termin } from "./termin.entity";
 import * as Validator from 'class-validator';
 
 @Index("jmbgZaposlenog", ["jmbgZaposlenog"], { unique: true })
 @Index("korisnickoIme", ["korisnickoIme"], { unique: true })
 @Entity("zaposleni")
 
 export class Zaposleni {
   @PrimaryGeneratedColumn({
      type: "int", 
      name: "zaposleniID" })
   zaposleniId: number;
 
   @Column("varchar", { 
     name: "imeZaposlenog",
      length: 10 })
   imeZaposlenog: string;
 
   @Column("varchar", {
      name: "prezimeZaposlenog",
       length: 15 })
   prezimeZaposlenog: string;
 
   @Column("varchar", {
      name: "jmbgZaposlenog",
       unique: true,
        length: 13 })
   jmbgZaposlenog: string;
 
   @Column("varchar", {
     name: "adresaZaposlenog",
      nullable: true,
       length: 50 })
   adresaZaposlenog: string | null;
 
   @Column("varchar", { 
     name: "korisnickoIme", 
     unique: true,
     length: 50 
    })
    @Validator.IsNotEmpty()
    @Validator.IsString()
   //@Validator.Matches(/^[a-z][a-z0-9\.{3,30}[a-z0-9]]$/) //username odgovara ovom principu
   korisnickoIme: string;
 
   @Column("varchar", {
      name: "lozinka",
      length: 50 })
      @Validator.IsNotEmpty()
      @Validator.IsHash('sha512')
   lozinka: string;
 
   @Column("tinyint", { 
     name: "aktivan",
     nullable: true, 
     width: 1 
    })
    
   aktivan: boolean | null;
 
   @OneToMany(() => Termin, (termin) => termin.zaposleni)
   termins: Termin[];
 }
 