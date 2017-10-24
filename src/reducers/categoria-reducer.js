import { CATEGORIA_LIST_REQUEST, CATEGORIA_LIST_SUCCESS, CATEGORIA_LIST_FAILURE } from '../actions/categoria-action'
import { CATEGORIA_ADD, CATEGORIA_FETCH, CATEGORIA_UPDATE, CATEGORIA_DELETE } from '../actions/categoria-action'

const initialState = {
    list: [],
    data: {}
}

const categoriaReducer = (state = initialState, action) => {
    switch (action.type) {

        case CATEGORIA_LIST_REQUEST: return {
            ...state,
            list: [],
            error: null
        }
        case CATEGORIA_LIST_SUCCESS: return {
            ...state,
            list: action.list,
            error: null
        }
        case CATEGORIA_LIST_FAILURE: return {
            ...state,
            list: [],
            error: action.error,
        }


        case CATEGORIA_ADD: return {
            ...state,
            //data: {} // no usado aun
        }
        case CATEGORIA_UPDATE: return {
            ...state,
            //data: {} // no usado aun
        }
        case CATEGORIA_FETCH: {
            //console.log('categoriaReducer data:' + JSON.stringify(action.data))
            return {
                ...state,
                data: action.data
            }
        }
        case CATEGORIA_DELETE: {
            const id = action.data
            return {
                ...state,
                list: state.list.filter(item => item.id !== id)
            }
        }

        default: return state
    }





}

export default categoriaReducer
