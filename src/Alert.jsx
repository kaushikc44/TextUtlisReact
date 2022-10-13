import React from "react";

function Alert (props){
    return (
       props.alerting &&  <div className={`alert alert-${props.alerting.type}`} role="alert">
            <strong>{props.alerting.type}</strong>{props.alert.message}
        </div>
    )
}

export default Alert;

