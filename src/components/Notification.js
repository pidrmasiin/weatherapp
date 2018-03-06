import React from 'react'

const Notification = ({message, color}) => {
   
        const divStyle = {
            color: color,
            background: 'mistyrose',
            fontSize: 20,
            borderStyle: 'solid',
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        }
        if (message === '' ) {
            return null
            }
      return (
        <div style={divStyle}>
        {message}
        </div>
      )
    }

export default Notification