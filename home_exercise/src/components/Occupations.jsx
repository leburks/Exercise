import React from 'react'

export default function Occupations({ occupations, setSelectOccupation }) {
    return (
        <>
            <select onChange={(e) => setSelectOccupation(e.target.value)}>
                <option value=''>select your occupation</option>
                {occupations.map(occupation => (
                    <option value={occupation}>{occupation}</option>
                ))}

            </select>
        </>
    )
}