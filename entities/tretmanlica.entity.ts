import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Uslugesalona } from "./uslugesalona.entity";

@Entity("tretmanlica", { schema: "salon_lepote" })
export class Tretmanlica {
  @PrimaryGeneratedColumn({ type: "int", name: "tretmanlicaID" })
  tretmanlicaId: number;

  @Column("varchar", { name: "VrstaTretmanaLica", length: 30 })
  vrstaTretmanaLica: string;

  @Column("int", { name: "VremeTrajTretmanaLica" })
  vremeTrajTretmanaLica: number;

  @Column("int", { name: "CenaTretmanaLica" })
  cenaTretmanaLica: number;

  @OneToMany(() => Uslugesalona, (uslugesalona) => uslugesalona.tretmanlica)
  uslugesalonas: Uslugesalona[];
}
