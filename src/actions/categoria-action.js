import { client } from './'
//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/categorias/'

export const CATEGORIA_LIST = "CATEGORIA_LIST"
export const CATEGORIA_ADD = "CATEGORIA_ADD"
export const CATEGORIA_FETCH = "CATEGORIA_FETCH"
export const CATEGORIA_UPDATE = "CATEGORIA_UPDATE"
export const CATEGORIA_DELETE = "CATEGORIA_DELETE"


export const getList = (q = '') => {
    return (dispatch) => {
        client.get(url + '?query=' + q)
            .then((r) => {
                dispatch({
                    "type": CATEGORIA_LIST,
                    "list": r.data
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export function save(data, history) {
    console.log('save data:' + JSON.stringify(data))
    return (dispatch) => {
        return client.post(url, data)
            .then((r) => {
                dispatch({
                    "type": CATEGORIA_ADD,
                    "data": r.data //no usado
                })
                history.push('/categorias/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function getById(id) {
    return dispatch => {
        return client.get(`${url}${id}`)
        .then((r) => {
            dispatch({
                "type": CATEGORIA_FETCH,
                "data": r.data 
            })
        })
        .catch((error) => {
            console.log(error)
            //throw (error)
        })
    }
}

export function update(data, history) {
    return (dispatch) => {
        return client.put(`${url}${data.id}/`, data)
            .then((r) => {
                dispatch({
                    "type": CATEGORIA_UPDATE,
                    "data": r.data //no usado
                })
                history.push('/categorias/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}

export function del(_id, history) {
    return dispatch => {
         return client.delete(`${url}${_id}`)
            .then((r) => {
                //console.log('deletex r:' + JSON.stringify(r))
                dispatch({
                    "type": CATEGORIA_DELETE,
                    "data": _id
                })
                //history.push('/categorias/list')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}