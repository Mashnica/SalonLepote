import { RoleCheckedGuard } from './../../misc/role.checker.quard';
import { AddTretmanLicaDto } from './../../dtos/tretmanLica/add.tretmanlica.dto';
import { TretmanLicaService } from './../../services/tretmanLica/tretmanLica.service';
import { Tretmanlica } from './../../../entities/tretmanlica.entity';
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {Crud} from "@nestjsx/crud";
import { AllowToRoles } from 'src/misc/allow.to.roles.descriptor';



@Controller('api/tretmanLica')
@Crud({
    model:{
        type: Tretmanlica
    },
    params:{
        id:{
            field:'tretmanlicaId',
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
export class TretmanLicaController{
  
      constructor(public service : TretmanLicaService) { }
      
      @Post('createTretmanLica') //POST http://localhost:3000/api/tretmanLica/createTretmanLica/
      createTretmanLica(@Body()data: AddTretmanLicaDto){

        return this.service.createTretmanLica(data);
      }

}