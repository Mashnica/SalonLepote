import { AddRacunDto } from './../../dtos/racun/add.racun.dto';
import { RacunService } from './../../services/racun/racun.service';
import { Racun } from './../../../entities/racun.entity';
import { Body, Controller, Post } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";



@Controller('api/racun')
@Crud({
    model:{
        type: Racun
    },
    params:{
        id:{
            field:'racunId',
            type: 'number',
            primary: true
        }
    }
})
export class RacunController{
  
      constructor(public service : RacunService) { }
      @Post('createRacun') //POST http://localhost:3000/api/racun/createRacun/
      createFullKlijent(@Body()data: AddRacunDto){

        return this.service.createRacun(data);
  
      }
}