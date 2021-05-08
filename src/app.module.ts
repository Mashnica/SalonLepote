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
      entities: [ Zaposleni] 
    }),
    TypeOrmModule.forFeature([Zaposleni])
  ],
  controllers: [AppController],
  providers: [ZaposleniService],
})
export class AppModule {}
