import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Uslugesalona } from "./uslugesalona.entity";

@Entity("masaza", { schema: "salon_lepote" })
export class Masaza {
  @PrimaryGeneratedColumn({ type: "int", name: "masazaID" })
  masazaId: number;

  @Column("varchar", { name: "VrstaMasaze", length: 30 })
  vrstaMasaze: string;

  @Column("int", { name: "VremeTraj" })
  vremeTraj: number;

  @Column("int", { name: "CenaMasaze" })
  cenaMasaze: number;

  @OneToMany(() => Uslugesalona, (uslugesalona) => uslugesalona.masaza)
  uslugesalonas: Uslugesalona[];
}
