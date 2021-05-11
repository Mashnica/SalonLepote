import { JwtDataDto } from './../dtos/auth/jwt.data.dto';
import { Request } from 'express';
declare module 'express'{
    interface Request{

        token:JwtDataDto;
    }
}