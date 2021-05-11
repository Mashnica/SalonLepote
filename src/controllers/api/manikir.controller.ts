import { RoleCheckedGuard } from './../../misc/role.checker.quard';
import { AddManikirDto } from './../../dtos/manikir/add.manikir.dto';
import { ManikirService } from '../../services/manikir/manikir.service';
import { Manikir } from './../../../entities/manikir.entity';
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";
import { AllowToRoles } from 'src/misc/allow.to.roles.descriptor';



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
export class ManikirController{
  
      constructor(public service : ManikirService) { }
      @Post('createManikir') //POST http://localhost:3000/api/manikir/createManikir/
      createManikir(@Body()data: AddManikirDto){

        return this.service.createManikir(data);
  
      }
}