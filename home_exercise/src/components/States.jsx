import React from 'react'

export default function States({ states, setSelectState }) {
    return (
        <>
            <select onChange={(e) => setSelectState(e.target.value)}>
                <option value=''>select your State</option>
                {states.map(state => (
                    <option value={state.abbreviation}>{state.name}</option>
                ))}
            </select>
        </>
    )
}