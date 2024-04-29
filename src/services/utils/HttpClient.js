import APIError from '../../errors/ApiError';
class HttpClient{
    constructor(baseURL) {
        this.baseURL = baseURL

    }

    get(path){
        return this.makeRequest(path, {method: 'GET'});
    }


    post(path, options){

        return this.makeRequest(path, {
            method: 'POST',
            body: options?.body,
            headers: options?.headers
        });
    }

    async makeRequest(path, options){
        
        const headers = new Headers()
        if(options.body)
        {
            headers.append('Content-Type', 'application/json')
        
        }
        if(options.headers){
            Object.entries(options.headers).forEach(([name, value]) =>{
                headers.append(name, value);
        });
        }

        const response = await fetch(`${this.baseURL}${path}`, {
            method: options.method,
            body: JSON.stringify(options.body),
            headers,
        });

        let responseBody = null;

        const contentType = response.headers.get('Content-Type');

        if(contentType.includes('application/json')){
            responseBody = await response.json();
        }

        if(response.ok){
            return responseBody;
        }
    
        throw new Error(
            responseBody?.error || `${response.status} - ${response.statusText}`
        );
    }

}

export default HttpClient; 