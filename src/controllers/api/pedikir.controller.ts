import { AddPedikirDto } from './../../dtos/pedikir/add.pedikir.dto';
import { PedikirService } from './../../services/pedikir/pedikir.service';
import { Pedikir } from './../../../entities/pedikir.entity';
import { KlijentService } from './../../services/klijent/klijent.service';
import { Klijent } from './../../../entities/klijent.entity';
import { Body, Controller, Post } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";



@Controller('api/pedikir')
@Crud({
    model:{
        type: Pedikir
    },
    params:{
        id:{
            field:'pedikirId',
            type: 'number',
            primary: true
        }
    }
})
export class PedikirController{
  
      constructor(public service : PedikirService) { }
      @Post('createPedikir') //POST http://localhost:3000/api/pedikir/createPedikir/
      createFullKlijent(@Body()data: AddPedikirDto){

        return this.service.createPedikir(data);
      }

}