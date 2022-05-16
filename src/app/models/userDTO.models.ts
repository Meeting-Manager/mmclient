export interface UserDTO{
    id:number;
    name:string;
    identityNumber:string;
    mail:string;
    jobId?:number;
    password:string;
    customerId?:number;
    isActive?:boolean;
    type:string;

    }