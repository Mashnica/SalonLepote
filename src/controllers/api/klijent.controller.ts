/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { RoleCheckedGuard } from './../../misc/role.checker.quard';
import { AddKlijentDto } from './../../dtos/klijent/add.klijent.dto';
import { KlijentService } from './../../services/klijent/klijent.service';
import { Klijent } from './../../../entities/klijent.entity';
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";
import { AllowToRoles } from 'src/misc/allow.to.roles.descriptor';



@Controller('api/klijenti')
@Crud({

    model:{
        type: Klijent
    },
    params:{
        id:{
            field:'klijentId',
            type: 'number',
            primary: true
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
export class KlijentController{
  
      constructor(public service : KlijentService) { }

      /* @Post('createKlijent') //POST http://localhost:3000/api/klijenti/createKlijent/
      createFullKlijent(@Body()data: AddKlijentDto){

        return this.service.createFullKlijent(data);*/

     
    
    }
      
  


