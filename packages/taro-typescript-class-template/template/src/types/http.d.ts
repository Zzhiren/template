declare namespace Http {
  export interface Response {
    code: number;
    error: any;
    failure: boolean;
    message: string;
    successful: boolean;
    timestamp: number;
  }
}