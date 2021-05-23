/* eslint-disable prettier/prettier */
import { AuthMiddleware } from './middlewares/auth.middleware';
import { AuthController } from './controllers/api/auth.controller';
import { TerminController } from './controllers/api/termin.controller';
import { TerminService } from './services/termin/termin.service';
import { UslugeSalonaService } from './services/uslugeSalona/uslugeSalona.service';
import { UslugeSalonaController } from './controllers/api/uslugeSalona.controller';
import { TretmanLicaService } from './services/tretmanLica/tretmanLica.service';
import { TretmanLicaController } from './controllers/api/tretmanLica.controller';
import { PedikirService } from './services/pedikir/pedikir.service';
import { PedikirController } from './controllers/api/pedikir.controller';
import { ManikirService } from './services/manikir/manikir.service';
import { ManikirController } from './controllers/api/manikir.controller';
import { MasazaService } from './services/masaza/masaza.service';
import { MasazaController } from './controllers/api/masaza.controller';
import { RacunService } from './services/racun/racun.service';
import { RacunController } from './controllers/api/racun.controller';
import { KlijentService } from './services/klijent/klijent.service';
import { KlijentController } from './controllers/api/klijent.controller';
import { ZaposleniController } from './controllers/api/zaposleni.contoller';
import { Uslugesalona } from './../entities/uslugesalona.entity';
import { Tretmanlica } from './../entities/tretmanlica.entity';
import { Termin } from './../entities/termin.entity';
import { Racun } from './../entities/racun.entity';
import { Pedikir } from './../entities/pedikir.entity';
import { Masaza } from './../entities/masaza.entity';
import { Manikir } from './../entities/manikir.entity';
import { Klijent } from './../entities/klijent.entity';
import { Zaposleni } from './../entities/zaposleni.entity';
import { MiddlewareConsumer, Module ,NestModule} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controllers/app.controller';
import  {DatabaseConfiguration} from 'config/database.configuration'
import { ZaposleniService } from './services/zaposleni/zaposleni.service';
import { KlijentToken } from 'entities/klijent-token.entity';





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
        Uslugesalona,
        Termin,
        KlijentToken,
      ] 
    }),
    TypeOrmModule.forFeature([
      Zaposleni,
      Klijent,
      Racun,
      Masaza,
      Manikir,
      Pedikir,
      Tretmanlica,
      Uslugesalona,
      Termin,
      KlijentToken
    ])
  ],
  controllers: [
    AppController,
    ZaposleniController,
    KlijentController,
    RacunController,
    MasazaController,
    ManikirController,
    PedikirController,
    TretmanLicaController,
    UslugeSalonaController,
    TerminController,
    AuthController
    ],
  providers: [ 
    ZaposleniService,
    KlijentService,
    RacunService,
    MasazaService,
    ManikirService,
    PedikirService,
    TretmanLicaService,
    UslugeSalonaService,
    TerminService,
    
  ],
  exports:[
    ZaposleniService,
    KlijentService

  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //primeni middleware
    consumer
    .apply(AuthMiddleware)
    .exclude('auth/*','assets/*','uploads/*') // dodati rute
    .forRoutes('api/*');
  }


}
