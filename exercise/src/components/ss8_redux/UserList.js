import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserById, getAllUsers} from "./action/action";

export function UserList() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    const handleDelete = async (id) => {
        dispatch(deleteUserById(id))
        alert('ok')
    }
    return (
        <>
            <div className='container'>
                <h3 className={'text-center'}>List Users</h3>
                <div className='row-cols-6  justify-content-center d-flex'>
                    <table className='table table-striped'>
                        <thead>
                        <tr className={'text-center'}>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <button className='btn btn-danger'
                                                onClick={() => handleDelete(user.id)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )

}