import React, { Fragment } from 'react'

const Member = ({ nom, children }) => {
  return (
    <Fragment>
      <h2>Membre de ma famille : {nom.toUpperCase()}</h2>

      {children ? <p>{children}</p> : null}
    </Fragment>
  )
}

export default Member
