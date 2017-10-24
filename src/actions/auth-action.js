import client from './'

const url = '/api-core/localuserinfo/'

//export const LOCAL_USER_INFO_FETCH = "LOCAL_USER_INFO_FETCH"
export function getLocalUserInfo() {
    return dispatch => {
        return client.get(`${url}`)
            .then((r) => {
                console.log(r.data)
                return r.data
            })
            .catch((error) => {
                console.log(error)
                //throw (error)
            })
    }
}
