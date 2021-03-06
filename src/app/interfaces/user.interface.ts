export interface UserState{
  user:{
        id:number,
        email:string,
        username:string,
        fullName:string,
        nationalId:string,
        mobileToken:string|null,
        image:string|null,
        is_staff:boolean,
        is_superuser:boolean,
        seniorEngineer:boolean,
  }
}

export interface TokensState{
  access:string;
  refresh:string
}