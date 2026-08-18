import React, {useContext} from 'react'
import {AppContext} from '../App'

const Context = () => {

  const context = useContext(AppContext)

  return (
    <div>
      <h3>Context</h3>
      {context && (
        <>
          <p>Linguagem: {context.language}</p>
          <p>Framework: {context.framework}</p>
          <p>Projetos: {context.projects}</p>
        </>
      )}
    </div>
  )
}

export default Context
