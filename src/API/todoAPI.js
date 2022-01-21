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
    }
}

export default accountAPI
