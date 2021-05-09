import { AddUslugeSalonaDto } from 'src/dtos/uslugeSalona/add.uslugeSalona.dto';
import { Tretmanlica } from './../../../entities/tretmanlica.entity';
import { UslugeSalonaService } from './../../services/uslugeSalona/uslugeSalona.service';
import { Uslugesalona } from './../../../entities/uslugesalona.entity';
import { Body, Controller, Post } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";



@Controller('api/uslugeSalona')
@Crud({
    model:{
        type: Uslugesalona
    },
    params:{
        id:{
            field:'uslugeSalonaId',
            type: 'number',
            primary: true
        }
    },
    query:{
         join:{
             masaza:{
                 eager:true
             },
             manikir:{
                eager:true
            },
            pedikir:{
                eager:true
            },
            tretmanlica:{
                eager:true
            }
             }
                

    }
})
export class UslugeSalonaController{
  
      constructor(public service : UslugeSalonaService) { }
      
      @Post('createUslugaSalona') //POST http://localhost:3000/api/uslugaSalona/createUslugaSalona/
      createUslugeSalona(@Body()data: AddUslugeSalonaDto){

        return this.service.createUslugeSalona(data);
      }
}