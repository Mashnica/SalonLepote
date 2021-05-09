import { Tretmanlica } from './../../../entities/tretmanlica.entity';
import { UslugeSalonaService } from './../../services/uslugeSalona/uslugeSalona.service';
import { Uslugesalona } from './../../../entities/uslugesalona.entity';
import { Controller } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";



@Controller('api/uslugeSalona')
@Crud({
    model:{
        type: Uslugesalona
    },
    params:{
        id:{
            field:'uslugeSalonaId',
            type: 'number',
            primary: true
        }
    },
    query:{
         join:{
             masaza:{
                 eager:true
             },
             manikir:{
                eager:true
            },
            pedikir:{
                eager:true
            },
            tretmanlica:{
                eager:true
            }
             }
                

    }
})
export class UslugeSalonaController{
  
      constructor(public service : UslugeSalonaService) { }
      
  

}