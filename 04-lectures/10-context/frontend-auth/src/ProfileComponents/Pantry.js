import React from 'react'

export default function Pantry({pantry, token}) {

    let handleDelete = () => {

        fetch(`http://localhost:3000/pantries/${pantry.id}`, {
            method: "DELETE",
            headers: {
                "authorization": token
            }
        })
        
    }

    return (
        <div>
            <p>{pantry.name}</p>
            <button onClick={handleDelete}>Delete Pantry</button>
        </div>
    )
}
