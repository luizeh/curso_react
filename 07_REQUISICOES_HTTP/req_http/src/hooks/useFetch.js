import {useState, useEffect } from 'react'

// custom hook
export const useFetch = (url) =>{
    const [data, setData] = useState(null)

    // refatorando o post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [itemId, setItemId] = useState(null)
    
    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers:{"Content-type": "application/json"},
                body: JSON.stringify(data)
            })
            setMethod(method)
        } else if(method === "DELETE"){
             setConfig({
                method,
                headers:{"Content-type": "application/json"},
            })
            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() =>{
        const fetchdata = async () =>{
            setLoading(true)
            try{
            const res = await fetch(url)
            const json = await res.json()

            setData(json)
            } catch(error){
                setError("Houve algum erro ao carregar os dados")
            }

            setLoading(false)
        }
        fetchdata()

    }, [url, callFetch])

    // refatorando post

    useEffect(() =>{
        const httpRequest = async () =>{
            let json

            if(method === "POST"){
                const fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)
                json = await res.json()
            } else if(method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)
                json = await res.json()
            }

            setCallFetch(json)
        }

        if(method){
            httpRequest()
        }
    }, [config, method, url, itemId])


    return {data, httpConfig, loading, error}
}