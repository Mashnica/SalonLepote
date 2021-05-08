import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Zaposleni } from "./zaposleni.entity";
import { Uslugesalona } from "./uslugesalona.entity";

@Index("uslugeSalonaID", ["uslugeSalonaId"], {})
@Index("zaposleniID", ["zaposleniId"], {})
@Entity("termin", { schema: "salon_lepote" })
export class Termin {
  @PrimaryGeneratedColumn({ type: "int", name: "terminID" })
  terminId: number;

  @Column("varchar", { name: "brojTermina", length: 10 })
  brojTermina: string;

  @Column({
       type: "date", 
       name: "datumTermina"
     })
  datumTermina: Date;

  @Column("int", { name: "Cena" })
  cena: number;

  @Column("int", { name: "zaposleniID", nullable: true })
  zaposleniId: number | null;

  @Column("int", { name: "uslugeSalonaID" })
  uslugeSalonaId: number;

  @ManyToOne(() => Zaposleni, (zaposleni) => zaposleni.termins, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "zaposleniID", referencedColumnName: "zaposleniId" }])
  zaposleni: Zaposleni;

  @ManyToOne(() => Uslugesalona, (uslugesalona) => uslugesalona.termins, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "uslugeSalonaID", referencedColumnName: "uslugeSalonaId" },
  ])
  uslugeSalona: Uslugesalona;
}
