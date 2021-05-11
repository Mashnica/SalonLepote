import { RoleCheckedGuard } from './../../misc/role.checker.quard';
import { AddUslugeSalonaDto } from 'src/dtos/uslugeSalona/add.uslugeSalona.dto';
import { Tretmanlica } from './../../../entities/tretmanlica.entity';
import { UslugeSalonaService } from './../../services/uslugeSalona/uslugeSalona.service';
import { Uslugesalona } from './../../../entities/uslugesalona.entity';
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";
import { AllowToRoles } from 'src/misc/allow.to.roles.descriptor';



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
                

    },
    routes:{
        only:[
            "createOneBase",
            "createManyBase",
            "updateOneBase",
            "getManyBase",
            "getOneBase",
             //replace i delete ne
        ],
        createOneBase: {
            decorators:[
                UseGuards(RoleCheckedGuard),
                AllowToRoles('zaposleni'),
            ],

        },
        createManyBase: {
            decorators:[
                UseGuards(RoleCheckedGuard),
                AllowToRoles('zaposleni'),
            ],
            
        },
        updateOneBase: {
            decorators:[
                UseGuards(RoleCheckedGuard),
                AllowToRoles('zaposleni'),
            ],
            
        },
        getManyBase: {
            decorators:[
                UseGuards(RoleCheckedGuard),
                AllowToRoles('zaposleni','klijent'),
            ],
            
        },
        getOneBase: {
            decorators:[
                UseGuards(RoleCheckedGuard),
                AllowToRoles('zaposleni','klijent'),
            ],
            
        }

    }
})
export class UslugeSalonaController{
  
      constructor(public service : UslugeSalonaService) { }
      
      @Post('createUslugaSalona') //POST http://localhost:3000/api/uslugaSalona/createUslugaSalona/
      createUslugeSalona(@Body()data: AddUslugeSalonaDto){

        return this.service.createUslugeSalona(data);
      }
}