/* eslint-disable prettier/prettier */
import { Request } from 'express';
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from '@nestjs/core';


@Injectable()
export class RoleCheckedGuard  implements CanActivate{
    //reflektor spisak rola 
    constructor(
        private reflector: Reflector
    ){}



    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
     //true odobravamo izvrsavanje metoda
     //false ne odobravamo izvrsavanje metoda
             const req:Request =context.switchToHttp().getRequest();
             const role=req.token.role;

             const allowedToRoles = this
                        .reflector
                        .get<("zaposleni" | "klijent")[]>('allow_to_roles',context.getHandler());

             
             
            if(!allowedToRoles.includes(role)){
                return false;
            }
            return true;
             



    }
   



}