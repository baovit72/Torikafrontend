import 'whatwg-fetch';
let fetch = window.fetch;

export default class APIHelper {
    static get(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'get',
                })
                .then(resp => {
                    return resp.json();
                })
                .then(returnedValue => {
                    resolve(returnedValue);
                })
                .catch(function(ex) {
                    if (ex) {
                        reject(ex);
                    }
                });
        })

    }
    static delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'delete',
                })
                .then(resp => {
                    return resp.json();
                })
                .then(returnedValue => {
                    resolve(returnedValue);
                })
                .catch(function(ex) {
                    if (ex) {
                        reject(ex);
                    }
                });
        })

    }


    static post(url, formData) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(resp => {
                    return resp.json();
                })
                .then(returnedValue => {
                    resolve(returnedValue);
                })
                .catch(function(ex) {
                    if (ex) {
                        reject(ex);
                    }
                });
        })

    }

    static put(url, formData) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'put',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(resp => {
                    return resp.json();
                })
                .then(returnedValue => {
                    resolve(returnedValue);
                })
                .catch(function(ex) {
                    if (ex) {
                        reject(ex);
                    }
                });
        })

    }


}