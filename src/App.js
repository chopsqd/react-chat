import React, {useReducer} from 'react'
import JoinBlock from "./components/JoinBlock";
import reducer from './reducer'
import socket from './socket'

function App() {
    const [state, dispatch] = useReducer(reducer, {
        joined: false
    })

    const onLogin = () => {
        dispatch({
            type: 'JOINED',
            payload: true
        })
    }

    return (
        <div className="wrapper">
            {!state.joined && <JoinBlock onLogin={onLogin}/>}
        </div>
    );
}

export default App;
