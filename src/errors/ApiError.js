export default class APIError extends Error {
    constructor(respose, body){
        super();

        this.name = 'APIError'
        this.response = response
        this.body = body
        this.message = (
            body?.error || `${response.status} - ${response.statusText}`

        )
    }

}