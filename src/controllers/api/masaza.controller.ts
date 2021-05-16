/* eslint-disable prettier/prettier */
import { RoleCheckedGuard } from './../../misc/role.checker.quard';
import { AddMasazaDto } from './../../dtos/masaza/add.masaza.dto';
import { MasazaService } from './../../services/masaza/masaza.service';
import { Masaza } from './../../../entities/masaza.entity';
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";
import { AllowToRoles } from 'src/misc/allow.to.roles.descriptor';



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
export class MasazaController{
  
      constructor(public service : MasazaService) { }

      @Post('createMasaza') //POST http://localhost:3000/api/masaza/createMasaza/
      createMasaza(@Body()data: AddMasazaDto){

        return this.service.createMasaza(data);
      
      }

}