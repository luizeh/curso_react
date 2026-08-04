const Events = () =>{

    const handleMyEvent = () => {
        console.log("Ativou o evento")
    }

    const render = (x) => {

        if(x){
            return <h1>Sim</h1>
        }else{
            return <h1>Nao</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique2</button>
            </div>
            {render(true)}
            {render(false)}
        </div>
    )
}

export default Events