import React, {useState} from 'react'
import store from './store'
import { Button } from 'reactstrap'

const Counter = () => {
    const [state, setState] = useState(false)
    const handleInc = () => {
        setState(!state)
        store.dispatch({
            type: 'increment'
        })
    }
    const handleDecr = () => {
        setState(!state)
        store.dispatch({
            type: 'decrement'
        })
    }
    const count = store.getState()
    return(
        <div>
            <h3>{count}</h3>
            <Button onClick={handleInc}>+</Button>
            <Button onClick={handleDecr}>-</Button>
        </div>
    )
}

export default Counter
