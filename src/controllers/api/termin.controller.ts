/* eslint-disable prettier/prettier */
import { RoleCheckedGuard } from './../../misc/role.checker.quard';
import { AddTerminDto } from './../../dtos/termin/add.termin.dto';
import { TerminService } from './../../services/termin/termin.service';
import { Termin } from './../../../entities/termin.entity';
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";
import { AllowToRoles } from 'src/misc/allow.to.roles.descriptor';



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
export class TerminController{
  
      constructor(public service : TerminService) { }
      
      @Post('createTermin') //POST http://localhost:3000/api/termin/createTermin/
      @UseGuards(RoleCheckedGuard)
      @AllowToRoles('klijent')
      async createTermin(@Body()data: AddTerminDto){

        return this.service.createTermin(data);
      }

}