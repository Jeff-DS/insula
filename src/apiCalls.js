const APIURL = '/api/todos/';

// export async function 
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