import { AddKlijentDto } from './../../dtos/klijent/add.klijent.dto';
import { KlijentService } from './../../services/klijent/klijent.service';
import { Klijent } from './../../../entities/klijent.entity';
import { Body, Controller, Post } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";



@Controller('api/klijenti')
@Crud({
    model:{
        type: Klijent
    },
    params:{
        id:{
            field:'klijentId',
            type: 'number',
            primary: true
        }
    }
})
export class KlijentController{
  
      constructor(public service : KlijentService) { }

       @Post('createKlijent') //POST http://localhost:3000/api/klijenti/createKlijent/
      createFullKlijent(@Body()data: AddKlijentDto){

        return this.service.createFullKlijent(data);

      }
      
  

}
