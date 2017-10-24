//import axios from "axios";

import client from './'

//https://github.com/brandiqa/redux-crud-example/blob/master/src/actions/contact-actions.js#L22

const url = '/api-catalogo/categorias/'

export const CATEGORIA_LIST_REQUEST = "CATEGORIA_LIST_REQUEST"
export const CATEGORIA_LIST_SUCCESS = 'CATEGORIA_LIST_SUCCESS'
export const CATEGORIA_LIST_FAILURE = 'CATEGORIA_LIST_FAILURE'

export const categoriaList = () => ({
    type: CATEGORIA_LIST_REQUEST,
})

export const categoriaListSuccess = (list) => ({
    type: CATEGORIA_LIST_SUCCESS,
    list
})

export const categoriaListFailure = error => ({
    type: CATEGORIA_LIST_FAILURE,
    error
})

export const CATEGORIA_ADD = "CATEGORIA_ADD"
export const CATEGORIA_FETCH = "CATEGORIA_FETCH"
export const CATEGORIA_UPDATE = "CATEGORIA_UPDATE"
export const CATEGORIA_DELETE = "CATEGORIA_DELETE"

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(categoriaListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(categoriaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(categoriaListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(categoriaListFailure('Error '+error.message))
            }
            //console.log(error.config);
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
                history.push('/catalogo/categorias/list')
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
                /*
                dispatch({
                    "type": CATEGORIA_FETCH,
                    "data": r.data 
                })
                */
                return r.data
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
                history.push('/catalogo/categorias/list')
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
                //history.push('/catalogo/categorias')
            })
            .catch((error) => {
                console.log(error)
                throw (error)
            })
    }
}