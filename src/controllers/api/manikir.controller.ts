import { ManikirService } from '../../services/manikir/manikir.service';
import { Manikir } from './../../../entities/manikir.entity';
import { Controller } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";



@Controller('api/manikir')
@Crud({
    model:{
        type: Manikir
    },
    params:{
        id:{
            field:'manikirId',
            type: 'number',
            primary: true
        }
    }
})
export class ManikirController{
  
      constructor(public service : ManikirService) { }
      
  

}