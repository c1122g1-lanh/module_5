import request from '../common.js'

export const findAll = () => {
    return request.get('/users')
}
export const remove = (id) => {
    return request.delete(`/users/${id}`)
}
