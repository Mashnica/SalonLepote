import { RoleCheckedGuard } from './../../misc/role.checker.quard';
import { AddPedikirDto } from './../../dtos/pedikir/add.pedikir.dto';
import { PedikirService } from './../../services/pedikir/pedikir.service';
import { Pedikir } from './../../../entities/pedikir.entity';
import { KlijentService } from './../../services/klijent/klijent.service';
import { Klijent } from './../../../entities/klijent.entity';
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";
import { AllowToRoles } from 'src/misc/allow.to.roles.descriptor';



@Controller('api/pedikir')
@Crud({
    model:{
        type: Pedikir
    },
    params:{
        id:{
            field:'pedikirId',
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
export class PedikirController{
  
      constructor(public service : PedikirService) { }
      @Post('createPedikir') //POST http://localhost:3000/api/pedikir/createPedikir/
      createFullKlijent(@Body()data: AddPedikirDto){

        return this.service.createPedikir(data);
      }

}