/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { JwtDataDto } from './../dtos/auth/jwt.data.dto';
import { Request } from 'express';
declare module 'express'{
    interface Request{

        token:JwtDataDto;
    }
}