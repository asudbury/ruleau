export interface Cases {
    meta: any;
    payload: CasesPayload | Error | string | any;
    error: boolean;
  }
  
  export interface CasesPayload {
    username: string;
  }