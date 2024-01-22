import React from 'react'

export default function Alert(props) {
  // PROBLEM :- LAYOUT SHIFTS WHEN WE DISPALY AN ALERT
  // GIVE HEIGHT TO COMPONENT IN STYLE TAG (CSS) TO AVOID CLS (Cumulative Layout Shift) AS SHOWN BELOW
  return (
    <div style={{height:"50px"}}>
      
      { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
}
    </div>
  )
}
