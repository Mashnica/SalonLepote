import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Uslugesalona } from "./uslugesalona.entity";
import * as Validator from 'class-validator';

@Entity("pedikir", { schema: "salon_lepote" })
export class Pedikir {
  @PrimaryGeneratedColumn({ type: "int", name: "pedikirID" })
  pedikirId: number;

  @Column("varchar", { name: "VrstaPedikira", length: 30 })
  vrstaPedikira: string;

  @Column("int", { name: "VremeTrajPedikir" })
  vremeTrajPedikir: number;

  @Column("int", { name: "CenaPedikira" })
  @Validator.IsEmpty()
  @Validator.IsNumber({
    allowInfinity:false,
    allowNaN: false,
  })
  @Validator.IsPositive()
  cenaPedikira: number;

  @OneToMany(() => Uslugesalona, (uslugesalona) => uslugesalona.pedikir)
  uslugesalonas: Uslugesalona[];
}
