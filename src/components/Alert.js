import React from 'react'

export const Alert = (props) => {
    return (
        <div style={{height:"20px"}}>
            {props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}
