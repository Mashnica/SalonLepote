import { RacunService } from './../../services/racun/racun.service';
import { Racun } from './../../../entities/racun.entity';
import { Controller } from "@nestjs/common";
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
      
  

}