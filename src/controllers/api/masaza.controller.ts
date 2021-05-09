import { MasazaService } from './../../services/masaza/masaza.service';
import { Masaza } from './../../../entities/masaza.entity';
import { Controller } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";



@Controller('api/masaza')
@Crud({
    model:{
        type: Masaza
    },
    params:{
        id:{
            field:'masazaId',
            type: 'number',
            primary: true
        }
    }
})
export class MasazaController{
  
      constructor(public service : MasazaService) { }
      
  

}