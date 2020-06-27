export interface RequestWrapper {
     endPoint: string,
     method: HttpMethods,
     body?: any,
     headers?: {[key: string]: any},
     queryParams?: {[key: string]: any}
} 

export type HttpMethods = "GET" | "POST" | "PATCH" | "PUT";