import React from "react"

export default function Header(props) {
    
    
    return (
        <div className="header">
            <h1>Pascals Triangle</h1>
            <label htmlFor="rows" className="input-title">Set Level:</label>
            <input 
                type="text" 
                id="rows" 
                name="rows" 
                onChange={props.handleInput}
                className="input-box"
            />
        </div>
    )
}