import { AddTerminDto } from './../../dtos/termin/add.termin.dto';
import { TerminService } from './../../services/termin/termin.service';
import { Termin } from './../../../entities/termin.entity';
import { Body, Controller, Post } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";



@Controller('api/termin')
@Crud({
    model:{
        type: Termin
    },
    params:{
        id:{
            field:'terminId',
            type: 'number',
            primary: true
        }
    },
    query:{
        join:{
            zaposleni:{
                eager:true
            },
            uslugeSalona:{
               eager:true
           }
               
        }
   }
})
export class TerminController{
  
      constructor(public service : TerminService) { }
      
      @Post('createTermin') //POST http://localhost:3000/api/termin/createTermin/
      createTermin(@Body()data: AddTerminDto){

        return this.service.createTermin(data);
      }

}