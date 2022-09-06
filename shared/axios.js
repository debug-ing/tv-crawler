import axios from "axios";

export default class Request {
    constructor(url, method, data = null) {
        this.url = url;
        this.method = method;
        this.data = data;
        return this;
    }
    send() {
        return new Promise((resolve, reject) => {
            axios({
                url: this.url,
                method: this.method,
                data: this.data
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });

    }
}