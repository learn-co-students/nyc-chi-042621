import React from 'react'
import Snack from './Snack'
import SnackContext from '../snackContext'
import { useContext } from 'react'

export default function SnackContainer() {
    let snackContext = useContext(SnackContext)

    let handleAddSnack = () => {
        snackContext.addSnack({id: 13, name: "Chips"})
    }

    return (
        <SnackContext.Consumer>
            {
                (snackContext) => {
                    return (<div>
                        <h2>Snack Container</h2>
                        {
                          snackContext.snacks.map(snack => <Snack key={snack.id} snack={snack} />)
                        }
                        <button onClick={handleAddSnack}>Add Snack</button>
                    </div>)
                }
            }
        </SnackContext.Consumer>
        
    )
}
