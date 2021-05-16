/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Uslugesalona } from "./uslugesalona.entity";
import * as Validator from 'class-validator';

@Index("jmbgKlijent", ["jmbgKlijent"], { unique: true })
@Index("usernameKlijent", ["usernameKlijent"], { unique: true })
@Entity("klijent")
export class Klijent {
  @PrimaryGeneratedColumn({ type: "int", name: "klijentID" })
  klijentId: number;

  @Column("varchar", { name: "imeKlijent", length: 10 })
  imeKlijent: string;

  @Column("varchar", { name: "prezimeKlijent", length: 15 })
  prezimeKlijent: string;

  @Column("varchar", { name: "jmbgKlijent", unique: true, length: 13 })
  jmbgKlijent: string;

  @Column("varchar", { name: "adresaKlijent", nullable: true, length: 50 })
  adresaKlijent: string | null;

  @Column("varchar", { name: "kontaktKlijent", length: 30 })
  kontaktKlijent: string;

  @Column("varchar", { name: "usernameKlijent", unique: true, length: 50 })
  @Validator.IsNotEmpty()
    @Validator.IsString()
  usernameKlijent: string;

  @Column("varchar", { name: "lozinkaKlijent", length: 50 })
  @Validator.IsNotEmpty()
      @Validator.IsHash('sha512')
  lozinkaKlijent: string;

  @OneToMany(() => Uslugesalona, (uslugesalona) => uslugesalona.klijent)
  uslugesalonas: Uslugesalona[];
}
