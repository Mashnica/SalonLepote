import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Termin } from "./termin.entity";
import { Masaza } from "./masaza.entity";
import { Pedikir } from "./pedikir.entity";
import { Manikir } from "./manikir.entity";
import { Tretmanlica } from "./tretmanlica.entity";
import { Klijent } from "./klijent.entity";
import { Racun } from "./racun.entity";
import * as Validator from 'class-validator';

@Index("klijentID", ["klijentId"], {})
@Index("manikirID", ["manikirId"], {})
@Index("masazaID", ["masazaId"], {})
@Index("pedikirID", ["pedikirId"], {})
@Index("racunID", ["racunId"], {})
@Index("tretmanlicaID", ["tretmanlicaId"], {})
@Entity("uslugesalona", { schema: "salon_lepote" })
export class Uslugesalona {
  @PrimaryGeneratedColumn({ type: "int", name: "uslugeSalonaID" })
  uslugeSalonaId: number;

  @Column("varchar", { name: "VrstaUslugeSalona", length: 30 })
  @Validator.IsEmpty()
  @Validator.IsString()
  @Validator.Length(1,30)
  vrstaUslugeSalona: string;

  @Column("int", { name: "VremeTrajanja" })
  vremeTrajanja: number;

  @Column("tinyint", { name: "dostupnost", nullable: true, width: 1 })
  dostupnost: boolean | null;
  
  @Column("int", { name: "masazaID", nullable: true })
  masazaId: number | null;

  @Column("int", { name: "pedikirID", nullable: true })
  pedikirId: number | null;

  @Column("int", { name: "manikirID", nullable: true })
  manikirId: number | null;

  @Column("int", { name: "tretmanlicaID", nullable: true })
  tretmanlicaId: number | null;

  @Column("int", { name: "klijentID" })
  klijentId: number;

  @Column("int", { name: "racunID" })
  racunId: number;

  @OneToMany(() => Termin, (termin) => termin.uslugeSalona)
  termins: Termin[];

  @ManyToOne(() => Masaza, (masaza) => masaza.uslugesalonas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "masazaID", referencedColumnName: "masazaId" }])
  masaza: Masaza;

  @ManyToOne(() => Pedikir, (pedikir) => pedikir.uslugesalonas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "pedikirID", referencedColumnName: "pedikirId" }])
  pedikir: Pedikir;

  @ManyToOne(() => Manikir, (manikir) => manikir.uslugesalonas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "manikirID", referencedColumnName: "manikirId" }])
  manikir: Manikir;

  @ManyToOne(() => Tretmanlica, (tretmanlica) => tretmanlica.uslugesalonas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "tretmanlicaID", referencedColumnName: "tretmanlicaId" },
  ])
  tretmanlica: Tretmanlica;

  @ManyToOne(() => Klijent, (klijent) => klijent.uslugesalonas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "klijentID", referencedColumnName: "klijentId" }])
  klijent: Klijent;

  @ManyToOne(() => Racun, (racun) => racun.uslugesalonas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "racunID", referencedColumnName: "racunId" }])
  racun: Racun;
}
