import {forwardRef, useRef, useImperativeHandle} from 'react'

const Some = forwardRef((props, ref) => {
    const localInputRef = useRef()
    
    useImperativeHandle(ref, () =>{
        return{

            validar: () =>{
                if(localInputRef.current.value.length > 3){
                    localInputRef.current.value = ""
                }
            }
        }
    })

  return (
    <div>
      <p>Insira no maximo 3 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  )
})

export default Some
