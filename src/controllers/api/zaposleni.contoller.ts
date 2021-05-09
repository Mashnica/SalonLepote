
import { ApiResponse } from './../../misc/api.response.class';
import { EditZaposleniDto } from './../../dtos/zaposleni/edit.zaposleni.dto';
import { AddZaposleniDto } from './../../dtos/zaposleni/add.zaposleni.dto';
import { Zaposleni } from './../../../entities/zaposleni.entity';
import { ZaposleniService } from './../../services/zaposleni/zaposleni.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('api/zaposleni')
export class ZaposleniController{
    constructor(
        private zaposleniService: ZaposleniService
      ){}
    
      @Get()   //http:localhost:3000/api/zaposleni/
      getAll():Promise<Zaposleni[]>{
          
       return  this.zaposleniService.getAll();
      }
      @Get(':id')   //http:localhost:3000/api/zaposleni/3
      getById( @Param('id')zaposleniID:number):Promise<Zaposleni| ApiResponse>{
          
        return new Promise(async(resolve)=>{
            let  zaposleni =await this.zaposleniService.getById(zaposleniID);

            if(zaposleni == undefined){

                resolve(new ApiResponse("error",-1002));
  
            }
            resolve(zaposleni);

        });
        

           
      }

      //dodavanje novog zaposlenog PUT  //http:localhost:3000/api/zaposleni/
      @Put()
      add(@Body() data: AddZaposleniDto): Promise<Zaposleni | ApiResponse>{
            return this.zaposleniService.add(data);

      }
      //editovanje info o zaposlenom POST //http:localhost:3000/api/zaposleni/4
      @Post(':id')
      edit( @Param('id') id :number,@Body() data:EditZaposleniDto): Promise<Zaposleni| ApiResponse>{

           return this.zaposleniService.editById(id,data);

      }
      //delete

      
}