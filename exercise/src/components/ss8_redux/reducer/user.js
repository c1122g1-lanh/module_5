import {DELETE_BY_ID, GET_ALL_USER} from "../action/types";


const initialState = []
export const userReducer = (users = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_ALL_USER:
            return payload
        case DELETE_BY_ID:
            return payload
        default:
            return users

    }
}