// criar context
import {createContext, useReducer} from 'react'

export const TitleContext = createContext()

export const titleReducer = (state, action) =>{

    switch(action.type){
        case "RED":
            return {...state, color: "red"}
        case "BLUE":
            return {...state, color: "blue"}
        case "YELLOW":
            return {...state, color: "yellow"}    
        default:
            return state;
    }

}
// criar provider

export const TitleContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(titleReducer, {color: "purple"})
    console.log("title color context:", state)
    return(
        <TitleContext.Provider value={{...state, dispatch}}>
            {children} 
        </TitleContext.Provider>
    )
}