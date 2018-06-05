const APIURL = '/api';

// TODO: Endpoint should return user's role(s) (array) and a token (string)
export async function logIn(username, password) {
    const data = JSON.stringify({   'username': username,
                                    'password': password
    });
    return fetch(APIURL + '/login', {
        method: 'POST',
        body: data,
        headers: new Headers({ 'contentType': 'application/json' })
        })
        .then(response => {
            if (response.ok) { return response.json(); }
            throw Error('Error: ' + response.status + response.statusText);
        })
        .catch(error => { throw Error('Error: ' + error.message) });
}

export async function getTodos() {
    return fetch(APIURL)
        .then(resp => {
            if (!resp.ok){
                if (resp.status >= 400 && resp.status < 500){
                    return resp.json().then(data =>{
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                }
                else{
                    let err = {errorMessage: "Server not responding."};
                    throw err;
                }
            }
            return resp.json();
    })
}

export async function createTodo(val) {
    return fetch(APIURL, {
            method: "POST",
            headers: new Headers({
                'Content-Type' : 'application/json'
            }),
            body: JSON.stringify({name: val})
        })
        .then(resp => {
            if (!resp.ok){
                if (resp.status >= 400 && resp.status < 500){
                    return resp.json().then(data =>{
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                }
                else{
                    let err = {errorMessage: "Server not responding."};
                    throw err;
                }
            }
            return resp.json();
    })
}

export async function deleteTodo(id){
    const deleteURL = APIURL + id;
    
    return fetch(deleteURL, {
            method: "DELETE",
        })
        .then(resp => {
            if (!resp.ok){
                if (resp.status >= 400 && resp.status < 500){
                    return resp.json().then(data =>{
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                }
                else{
                    let err = {errorMessage: "Server not responding."};
                    throw err;
                }
            }
            return resp.json();
    })
}

export async function toggleTodo(todo){
    const updateURL = APIURL + todo._id;
        
    return fetch(updateURL, {
        method: "PUT",
        headers: new Headers({
            'Content-Type' : 'application/json'
        }),
        body: JSON.stringify({completed: !todo.completed})
    })
    .then(resp => {
        if (!resp.ok){
            if (resp.status >= 400 && resp.status < 500){
                return resp.json().then(data =>{
                    let err = {errorMessage: data.message};
                    throw err;
                });
            }
            else{
                let err = {errorMessage: "Server not responding."};
                throw err;
            }
        }
        return resp.json();
    }) 
}