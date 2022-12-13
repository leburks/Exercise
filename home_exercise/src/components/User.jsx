
import React, { useEffect, useState } from 'react'
import API from '../Api/Api'
import Occupations from './Occupations'
import States from './States'

export default function User() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [occupations, setOccupations] = useState([])
    const [states, setStates] = useState([])
    const [loading, setLoading] = useState(true)
    const [occupation, setSelectOccupation] = useState('')
    const [state, setSelectState] = useState('')

    const api = new API()
    useEffect(() => {
        api.getData().then(data => {
            const { occupations, states } = data
            setOccupations(occupations)
            setStates(states)
            setLoading(false)
        })
    }, [])
    const handleSubmit = () => {
        if (name && email && password && occupation && state) {
            api.postData(name, email, password, occupation, state)
        } else {
            alert('Enter all the Details')
        }
        setName('')
        setEmail('')
        setPassword('')
    }

    if (loading) {
        return (
            <div>
                ...Loading
            </div>
        )
    }
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="name" placeholder='Enter your Full Name' /><br /><br />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="email" placeholder='Enter your name' /><br /><br />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your password' /><br /><br />
            <div className="occupations">
                {occupations.length > 0 && <Occupations occupations={occupations} setSelectOccupation={setSelectOccupation} />}
            </div>
            <br />
            <div className="states">
                {states.length > 0 && <States states={states} setSelectState={setSelectState} />}
            </div><br />
            <button onClick={handleSubmit}> Submit</button>
        </div>
    )
}