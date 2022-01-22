import { serverUrl } from '../constant/constant'

const accountAPI = {
    getTodoList: async (account) => {
        const request = new Request(serverUrl + "/api/todo/" + account.id, {
            method: 'GET',
        })

        return fetch(request)
            .then(res => res.json())
            .then(result => result)
            .catch(error => error)
    },
    addTodo: async (todo) => {
        const request = new Request(serverUrl + "/api/todo", {
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
    }
}

export default accountAPI
