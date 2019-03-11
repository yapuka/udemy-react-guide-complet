import React from 'react'

const Member = (props) => {
  const name = props.nom;
  return <h2>Membre de ma famille : {name.toUpperCase()}</h2>
}

export default Member
