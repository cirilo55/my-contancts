import HttpClient from "./utils/HttpClient";

class DanfeService {
    constructor() {
        this.httpClient = new HttpClient('http://127.0.0.1:1111');
    }

    sendDanfe(danfeNumber) {
        const danfeObject = {
            body: {
                danfe: danfeNumber
            }
        }
        
        return this.httpClient.post('/extract_code', danfeObject);
    }
}

export default new DanfeService();