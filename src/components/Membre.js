import React, { Fragment } from 'react'

const Member = ({ age, children, nom }) => {
  return (
    <Fragment>
      <h2 style={{
        backgroundColor: age < 10 ? 'yellow' : 'purple',
        color: age < 10 ? 'black' : 'white'
      }}>
        {nom.toUpperCase()} : {age}
      </h2>

      {children ? <p>{children}</p> : null}
    </Fragment>
  )
}

export default Member
