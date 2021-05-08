import { Uslugesalona } from './../entities/uslugesalona.entity';
import { Tretmanlica } from './../entities/tretmanlica.entity';
import { Termin } from './../entities/termin.entity';
import { Racun } from './../entities/racun.entity';
import { Pedikir } from './../entities/pedikir.entity';
import { Masaza } from './../entities/masaza.entity';
import { Manikir } from './../entities/manikir.entity';
import { Klijent } from './../entities/klijent.entity';
import { Zaposleni } from './../entities/zaposleni.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import  {DatabaseConfiguration} from 'config/database.configuration'
import { ZaposleniService } from './services/zaposleni/zaposleni.service';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DatabaseConfiguration.hostname,
      port: 3306,
      username: DatabaseConfiguration.username,
      password: DatabaseConfiguration.password,
      database: DatabaseConfiguration.database,
      entities: [ 
        Zaposleni,
        Klijent,
        Manikir,
        Masaza,
        Pedikir,
        Racun,
        Termin,
        Tretmanlica,
        Uslugesalona
      ] 
    }),
    TypeOrmModule.forFeature([Zaposleni])
  ],
  controllers: [AppController],
  providers: [ZaposleniService],
})
export class AppModule {}
