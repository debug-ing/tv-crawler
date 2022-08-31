import axios from "axios";

// function Request(url, method, data=null) {
//     return new Promise((resolve, reject) => {
//         axios({
//             url: url,
//             method: method,
//             data: data
//         }).then((response) => {
//             resolve(response.data);
//         }).catch((error) => {
//             reject(error);
//         });
//     });

// }

// module.exports.request = Request;

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