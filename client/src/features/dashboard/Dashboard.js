import React, { useEffect } from 'react'
import request from '../../utils/request'

export function Dashboard() {
    useEffect(async () => {
        request.get('/secret')
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }, [])
    return <div>
        logged in
        <button onClick={() => request.logout()}>logout</button>
    </div>
}