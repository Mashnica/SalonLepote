import { AddTretmanLicaDto } from './../../dtos/tretmanLica/add.tretmanlica.dto';
import { TretmanLicaService } from './../../services/tretmanLica/tretmanLica.service';
import { Tretmanlica } from './../../../entities/tretmanlica.entity';
import { Body, Controller, Post } from "@nestjs/common";
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
      
      @Post('createTretmanLica') //POST http://localhost:3000/api/tretmanLica/createTretmanLica/
      createTretmanLica(@Body()data: AddTretmanLicaDto){

        return this.service.createTretmanLica(data);
      }

}