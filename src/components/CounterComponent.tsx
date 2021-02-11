import React from 'react'
import { Button } from '@material-ui/core'
const Counter = (props: any) => {
    return (
        <div>
            <br />
            <br />
            <br />
            <h1>Counter: {props.countData}</h1>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    props.incrementHandler()
                }}
            >
                Increment
            </Button>
            &nbsp;&nbsp;
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    props.decrementHandler()
                }}
            >
                Decrement
            </Button>
        </div>
    )
}

export default Counter
