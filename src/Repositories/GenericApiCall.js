import apiUrl from "../Misc/apiUrl.json"

const getDataFromOwnAPI = async (endpoint) => {
    return await fetch(`${apiUrl["URL"]}${endpoint}`)
        .then(res => res.json())
        .then((data) => {
            return data;
        })
        .catch(console.log)
}


export {
    getDataFromOwnAPI
}