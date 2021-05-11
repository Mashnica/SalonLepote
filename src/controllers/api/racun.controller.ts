import { RoleCheckedGuard } from './../../misc/role.checker.quard';
import { AddRacunDto } from './../../dtos/racun/add.racun.dto';
import { RacunService } from './../../services/racun/racun.service';
import { Racun } from './../../../entities/racun.entity';
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";
import { AllowToRoles } from 'src/misc/allow.to.roles.descriptor';



@Controller('api/racun')
@Crud({
    model:{
        type: Racun
    },
    params:{
        id:{
            field:'racunId',
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
export class RacunController{
  
      constructor(public service : RacunService) { }
      @Post('createRacun') //POST http://localhost:3000/api/racun/createRacun/
      createFullKlijent(@Body()data: AddRacunDto){

        return this.service.createRacun(data);
  
      }
}