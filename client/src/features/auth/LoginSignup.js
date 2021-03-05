import React, { useEffect } from 'react'
import Page from '../common/Page'
import { useHistory } from 'react-router-dom'
import request from '../../utils/request'
import useForm from '../../hooks/useForm'
import { Input, Button } from 'antd';

export function LoginSignup() {
    const history = useHistory()
    const [form, setField] = useForm({username: '', password: ''})
    function handleSubmit(e) {
        e.preventDefault()
        const { username, password } = form
        request.login(username, password)
        .then(resp => {
            history.push('/dashboard')
        })
    }

    useEffect(async () => {
        request.get('/secret')
        .then(r => console.log(r))
        .catch(e => console.log(e))
    }, [])
    return <Page>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">username</label>
                <Input id="username" type="text" value={form.username} name="username" onChange={setField} />
            </div>
            <div className="form-group">
                <label htmlFor="password">password</label>
                <Input id="password" type="password" value={form.password} name="password" onChange={setField} />
            </div>
            <Button type="primary" htmlType="submit">Submit</Button>
        </form>
    </Page>
}