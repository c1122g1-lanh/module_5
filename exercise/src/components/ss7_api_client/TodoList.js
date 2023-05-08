import React, {useEffect, useLayoutEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as todoService from "../../services/todoService";
import axios from "axios";

export function TodoList() {
    const [todoList, setTodoList] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await todoService.findAll()
            setTodoList(result)
        }
        fetchApi()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <h2>Todo List</h2>
                </div>
                <div className="row">
                    <Formik initialValues={{
                        id: '',
                        name: ''
                    }}
                            onSubmit={(todo) => {
                                const create = async () => {
                                    await todoService.save(todo)
                                    setTodoList([...todoList, todo])
                                }
                                create()

                            }}>
                        <Form>
                            <Field type='text' name='name'/><br/><br/>
                            <button type='submit' className="btn btn-primary">Lụm</button>
                        </Form>
                    </Formik></div>
                <br/>
                <div className="row">
                    {
                        todoList.map((todo, index) => (
                            <ul key={index}>
                                <li>{todo.name}</li>
                            </ul>
                        ))
                    }
                </div>
            </div>

        </>
    )
}