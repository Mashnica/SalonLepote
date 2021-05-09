import { AddMasazaDto } from './../../dtos/masaza/add.masaza.dto';
import { MasazaService } from './../../services/masaza/masaza.service';
import { Masaza } from './../../../entities/masaza.entity';
import { Body, Controller, Post } from "@nestjs/common";
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

      @Post('createMasaza') //POST http://localhost:3000/api/masaza/createMasaza/
      createMasaza(@Body()data: AddMasazaDto){

        return this.service.createMasaza(data);
      
      }

}