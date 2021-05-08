import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Uslugesalona } from "./uslugesalona.entity";

@Entity("manikir", { schema: "salon_lepote" })
export class Manikir {
  @PrimaryGeneratedColumn({ type: "int", name: "manikirID" })
  manikirId: number;

  @Column("varchar", { name: "VrstaManikira", length: 30 })
  vrstaManikira: string;

  @Column("int", { name: "VremeTrajManikir" })
  vremeTrajManikir: number;

  @Column("int", { name: "CenaManikira" })
  cenaManikira: number;

  @OneToMany(() => Uslugesalona, (uslugesalona) => uslugesalona.manikir)
  uslugesalonas: Uslugesalona[];
}
