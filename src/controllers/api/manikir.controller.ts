import { AddManikirDto } from './../../dtos/manikir/add.manikir.dto';
import { ManikirService } from '../../services/manikir/manikir.service';
import { Manikir } from './../../../entities/manikir.entity';
import { Body, Controller, Post } from "@nestjs/common";
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
      @Post('createManikir') //POST http://localhost:3000/api/manikir/createManikir/
      createManikir(@Body()data: AddManikirDto){

        return this.service.createManikir(data);
  
      }
}