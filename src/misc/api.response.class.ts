export class ApiResponse{

    

    status: string;
    statusCode:number;
    message: string | null ; //opcioni string
    
    constructor(status:string,statusCode: number,message:string |null = null){

        this.status=status;
        this.statusCode=statusCode;
        this.message=message;
    }

}