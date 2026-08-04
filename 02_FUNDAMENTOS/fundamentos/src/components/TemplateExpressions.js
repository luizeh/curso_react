const TemplateExpressions = () => {
const name = "Jamilton"
const data = {
    idade: 31,
    trabalho: "Programador"
}
    return(
        <div>
            <h1>Olá {name}, tudo bem? voce atua como {data.trabalho} e tem {data.idade} anos</h1>

        </div>
    )
}

export default TemplateExpressions;