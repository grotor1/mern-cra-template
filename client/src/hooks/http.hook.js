import {useState, useCallback} from 'react'

//some functions for sending http requests and handling responses

export const useHttp = () =>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        setLoading(true)
        try{
            if(body){
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()
            if(!response.ok){
                throw new Error(data.message)
            }
            setLoading(false)
            return data
        }catch (e) {
            setLoading(false)
            setError(e.message)
        }
    }, [])
    const clearError = useCallback(() => setError(null), [])
    return { loading, request, error, clearError }
}