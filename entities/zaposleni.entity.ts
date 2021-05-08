import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Zaposleni{
   @PrimaryGeneratedColumn({name:'zaposleniID',type:'int'})
   zaposleniID: number;

   @Column({type:'varchar',length:'10'})
   imeZaposlenog:string;

   @Column({type:'varchar',length:'15'})
   prezimeZaposlenog:string;

   @Column({type:'varchar',length:'13',unique: true})
   jmbgZaposlenog:string;

   @Column({type:'varchar',length:'50'})
   adresaZaposlenog:string;
   

   @Column({type:'varchar',length:'50',unique: true})
   korisnickoIme:string;
   
   
   @Column({type:'varchar',length:'50'})
   lozinka:string;

   @Column({type:'boolean'})
   aktivan:boolean;

}