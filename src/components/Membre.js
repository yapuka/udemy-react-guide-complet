import React, { Fragment } from 'react'

const Member = ({ age, children, nom }) => {
  return (
    <Fragment>
      <h2 style={{
        backgroundColor: 'violet'
      }}>
        {nom.toUpperCase()} : {age}
      </h2>

      {children ? <p>{children}</p> : null}
    </Fragment>
  )
}

export default Member
