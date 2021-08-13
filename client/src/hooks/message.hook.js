import {useCallback} from 'react'

//hook that used to alert some text in any component with useEffect

export const useMessage = () => {
    return useCallback(text => {
        if (text) {
            alert(text)
        }
    }, [])
}