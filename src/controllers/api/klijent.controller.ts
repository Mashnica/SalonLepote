import { KlijentService } from './../../services/klijent/klijent.service';
import { Klijent } from './../../../entities/klijent.entity';
import { Controller } from "@nestjs/common";
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
      
  

}