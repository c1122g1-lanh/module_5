import * as userService from "../service/userService";
import {DELETE_BY_ID, GET_ALL_USER} from "./types";


export const getAllUsers = () => async (dispatch) => {
    try {
        const res = await userService.findAll()
        dispatch({
            type: GET_ALL_USER,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }
}
export const deleteUserById = (id) => async (dispatch) => {
    try {
        await userService.remove(id)
        const res = await userService.findAll()
        dispatch({
            type: DELETE_BY_ID,
            payload: res.data
        })
    } catch (e) {
        console.log(e)
    }
}

