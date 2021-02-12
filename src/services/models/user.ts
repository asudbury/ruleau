export interface User {
    meta: any;
    payload: UserPayload | Error | string | any;
    error: boolean;
  }
  
  export interface UserPayload {
    username: string;
  }