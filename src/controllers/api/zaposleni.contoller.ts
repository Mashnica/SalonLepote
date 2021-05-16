/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { RoleCheckedGuard } from './../../misc/role.checker.quard';
import { AllowToRoles } from './../../misc/allow.to.roles.descriptor';

import { ApiResponse } from './../../misc/api.response.class';
import { EditZaposleniDto } from './../../dtos/zaposleni/edit.zaposleni.dto';
import { AddZaposleniDto } from './../../dtos/zaposleni/add.zaposleni.dto';
import { Zaposleni } from './../../../entities/zaposleni.entity';
import { ZaposleniService } from './../../services/zaposleni/zaposleni.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, SetMetadata, UseGuards } from "@nestjs/common";

@Controller('api/zaposleni')
export class ZaposleniController{
    constructor(
        private zaposleniService: ZaposleniService
      ){}
    
      @Get()   //http:localhost:3000/api/zaposleni/ 
      @UseGuards(RoleCheckedGuard)
      @AllowToRoles('zaposleni') //dozvola da pregledaju podatke
      
      getAll():Promise<Zaposleni[]>{
          
       return  this.zaposleniService.getAll();
      }
      @Get(':id')   //http:localhost:3000/api/zaposleni/3
      @UseGuards(RoleCheckedGuard)
      @AllowToRoles('zaposleni')
      getById( @Param('id')zaposleniID:number):Promise<Zaposleni| ApiResponse>{
          
        return new Promise(async(resolve)=>{
            let  zaposleni =await this.zaposleniService.getById(zaposleniID);

            if(zaposleni == undefined){

                resolve(new ApiResponse("error",-1002));
  
            }
            resolve(zaposleni);

        });
        

           
      }

      //dodavanje novog zaposlenog POST //http:localhost:3000/api/zaposleni/
      @Post()
      @UseGuards(RoleCheckedGuard)
      @AllowToRoles('zaposleni')
      add(@Body() data: AddZaposleniDto): Promise<Zaposleni | ApiResponse>{
            return this.zaposleniService.add(data);

      }
      //editovanje info o zaposlenom PATCH //http:localhost:3000/api/zaposleni/4
      @Patch(':id')
      @UseGuards(RoleCheckedGuard)
      @AllowToRoles('zaposleni')
      edit( @Param('id') id :number,@Body() data:EditZaposleniDto): Promise<Zaposleni| ApiResponse>{

           return this.zaposleniService.editById(id,data);

      }
      //delete zaposlenog
      

      
}