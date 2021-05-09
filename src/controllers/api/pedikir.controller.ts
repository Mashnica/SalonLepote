import { PedikirService } from './../../services/pedikir/pedikir.service';
import { Pedikir } from './../../../entities/pedikir.entity';
import { KlijentService } from './../../services/klijent/klijent.service';
import { Klijent } from './../../../entities/klijent.entity';
import { Controller } from "@nestjs/common";
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
      
  

}