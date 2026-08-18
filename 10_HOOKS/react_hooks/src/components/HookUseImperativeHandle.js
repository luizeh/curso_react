import {useImperativeHandle, useRef} from 'react'
import Some from './Some'

const HookUseImperativeHandle = () => {
    const componentRef = useRef()
  return (
    <div>
    <h2>useImperativeHandle</h2>
    <Some ref={componentRef}/>
    <button onClick={() => componentRef.current.validar()}>Validar</button>
    <hr />
    </div>
  )
}

export default HookUseImperativeHandle

