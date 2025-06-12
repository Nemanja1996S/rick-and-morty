import apiClient from "./api-client";

class HttpService {
    endpoint: string;
    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll<T>(){
        const controller = new AbortController();
        const request = apiClient.get<T>(this.endpoint, {signal: controller.signal});
        return {request, cancel: () => controller.abort()};
    }

    getAllWithParams<T>(name: string, status: string, page: number){
        const controller = new AbortController();
        let request
        if(status === "Any" || status === null){
            request = apiClient.get<T>(this.endpoint, {params: {name, page}, signal: controller.signal});
        }
        else{
            request = apiClient.get<T>(this.endpoint, {params: {name, status, page}, signal: controller.signal});
        }
        
        return {request, cancel: () => controller.abort()}; 
    }
}

const create = (endpoint: string) => new HttpService(endpoint);
export default create;