import React, {createContext} from 'react';
import './index.css'
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
import State from './components/State';
import Context from './components/Context';

// type

type textOrnull = string | null
type fixed = "Isso" | "Ou" | "Aquilo"

// context
export interface IAppContext{
  language: string,
  framework: string,
  projects: number,
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  // variaveis

  const name: string = "Jamilton"
  const age: number = 30;
  const isworking: boolean = true;

  const userGreeting = (name: string): string =>{
    return `Olá ${name}`
  }


// type
  const text: textOrnull = "tem algum texto aqui"
  let text2: textOrnull = null

  const testandoFixed: fixed = "Isso";
  const testandoFixed2: fixed = "Aquilo"

  // context
  const contextValue: IAppContext ={
    language: "PHP",
    framework: "Laravel",
    projects: 5,
  };

  text2 = "opa jamilton"

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>nome: {name}</h2>
      <p>idade: {age}</p>
      {isworking ? <p>Está trabalhando</p> : <p>Não está trabalhando</p>}
      <h3>{userGreeting(name)}</h3>
    <FirstComponent/>
    <SecondComponent name="Segundo"/>
    <Destructuring
      title="Desestruturando Props"
      content="lorem ipsum dolor sit amet"
      commentsQty={10}
      tags={["Typescript", "Javascript"]}
      category={Category.HTML}
      />
      <State/>
      <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
