import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Uslugesalona } from "./uslugesalona.entity";
import * as Validator from 'class-validator';

@Entity("racun", { schema: "salon_lepote" })
export class Racun {
  @PrimaryGeneratedColumn({ type: "int", name: "racunID" })
  racunId: number;

  @Column("varchar", { name: "BrRacuna", length: 10 })
  @Validator.IsNotEmpty()
  @Validator.IsString()
  brRacuna: string;

  @Column("varchar", { name: "TipRacuna", length: 10 })
  tipRacuna: string;

  @OneToMany(() => Uslugesalona, (uslugesalona) => uslugesalona.racun)
  uslugesalonas: Uslugesalona[];
}
