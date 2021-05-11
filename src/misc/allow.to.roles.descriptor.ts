import { SetMetadata } from "@nestjs/common";

export const AllowToRoles= (...roles: ("zaposleni" | "klijent")[]) =>{

    return SetMetadata('allow_to_roles',roles);

};