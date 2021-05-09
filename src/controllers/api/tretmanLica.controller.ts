import { TretmanLicaService } from './../../services/tretmanLica/tretmanLica.service';
import { Tretmanlica } from './../../../entities/tretmanlica.entity';
import { Controller } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";



@Controller('api/tretmanLica')
@Crud({
    model:{
        type: Tretmanlica
    },
    params:{
        id:{
            field:'tretmanlicaId',
            type: 'number',
            primary: true
        }
    }
})
export class TretmanLicaController{
  
      constructor(public service : TretmanLicaService) { }
      
  

}