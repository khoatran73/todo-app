const { REACT_APP_SERVER_URL } = process.env

const accountAPI = {
    getTodoList: async (accountId) => {
        const request = new Request(REACT_APP_SERVER_URL + "/api/todo/" + accountId, {
            method: 'GET',
        })

        return fetch(request)
            .then(res => res.json())
            .then(result => result)
            .catch(error => error)
    },
    addTodo: async (todo) => {
        const request = new Request(REACT_APP_SERVER_URL + "/api/todo", {
            method: "post",
            credentials: 'include',
            body: JSON.stringify(todo),
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            }
        })

        return await fetch(request)
            .then(res => res.json())
            .then(result => result)
            .catch(error => error)
    },
    deleteTodo: async (id) => {
        const url = `${REACT_APP_SERVER_URL}/api/todo/${id}`
        console.log(url)
        const request = new Request(url, {
            method: "delete",
            credentials: 'include',
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        })

        return await fetch(request)
            .then(res => res.json())
            .then(result => result)
            .catch(error => error)
    },
    editTodo: async (todo) => {
        const url = `${REACT_APP_SERVER_URL}/api/todo/${todo.todoId}`
        const request = new Request(url, {
            method: "put",
            credentials: 'include',
            body: JSON.stringify(todo),
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            }
        })

        return await fetch(request)
            .then(res => res.json())
            .then(result => result)
            .catch(error => error)
    },
}

export default accountAPI
