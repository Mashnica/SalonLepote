import { TerminService } from './../../services/termin/termin.service';
import { Termin } from './../../../entities/termin.entity';
import { Controller } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";



@Controller('api/termin')
@Crud({
    model:{
        type: Termin
    },
    params:{
        id:{
            field:'terminId',
            type: 'number',
            primary: true
        }
    },
    query:{
        join:{
            zaposleni:{
                eager:true
            },
            uslugeSalona:{
               eager:true
           }
               
        }
   }
})
export class TerminController{
  
      constructor(public service : TerminService) { }
      
  

}