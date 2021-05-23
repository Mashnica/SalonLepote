/* eslint-disable prettier/prettier */
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import * as Validator from 'class-validator';

  
 
  @Entity("klijent_token")
  export class KlijentToken {
    @PrimaryGeneratedColumn({ type: "int", name: "klijent_token_id" })
    klijentTokenId: number;
  
   @Column({type:"int",name:"klijent_id"})
   klijentId:number;

   @Column({type:"timestamp",name:"created_at"})
   createAt:string;

   @Column({type:"text"})
   @Validator.IsNotEmpty()
   @Validator.IsString()
   token:string;

   @Column({type:"datetime",name:"expires_at"})
   expiresAt:string;

   @Column({type:"tinyint",name:"is_valid",default:1})
   @Validator.IsNotEmpty()
   @Validator.IsIn([ 0, 1 ])
   isValid:number;
    
  }
  