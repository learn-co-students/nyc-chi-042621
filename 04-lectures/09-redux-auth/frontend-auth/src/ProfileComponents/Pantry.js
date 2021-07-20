import React from 'react'
import {connect} from 'react-redux'

function Pantry({pantry, token, deletePantry}) {

    let handleDelete = () => {

        fetch(`http://localhost:3000/pantries/${pantry.id}`, {
            method: "DELETE",
            headers: {
                "authorization": token
            }
        })
            .then(res => res.json())
            .then(() => {
                deletePantry(pantry.id)
            })
        
    }

    return (
        <div>
            <p>{pantry.name}</p>
            <button onClick={handleDelete}>Delete Pantry</button>
        </div>
    )
}

let getInfo = ({userInfo}) => {
    return {
        token: userInfo.token
    }
}


let deletePantry = (id) => {
    return {
        type: "DELETE_PANTRY",
        payload: id
    }
}


export default connect(getInfo, {deletePantry})(Pantry)
