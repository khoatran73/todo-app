const { REACT_APP_CLIENT_ID } = process.env

const accountAPI = {
    postAccount: async (account) => {
        const request = new Request(REACT_APP_CLIENT_ID + "/api/account", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        })

        await fetch(request)
            .then(res => res.json())
            .then(result => result)
            .catch(error => error)
    }
}

export default accountAPI
