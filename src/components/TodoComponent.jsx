import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
const TodoComponent = (props) => {
    console.log('all props data in Todos component', props)

    // console.log(props.getTodoListHandler)
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const data = props.getTodoListHandler()
        setTodos(data)
    }, [props.getTodoListHandler])

    console.log('todostodostodos', todos)
    return (
        <div>
            {' '}
            <br />
            <br />
            <br />
            <h1>Todo Component</h1>
            <Button variant="contained" color="primary" onClick={props.getTodoListHandler}>
                Get Todos
            </Button>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default TodoComponent
