import React, { createContext, useContext, useState } from 'react'
const AppContextData = createContext()
export const AppContext = ({children}) => {
    const [userToken,setUserToken] = useState('');
    const [userDetails,setUserDetails] = useState('');
    return <AppContextData.Provider value={{userToken,setUserToken,userDetails,setUserDetails}}>{children}
    </AppContextData.Provider>
}
export const AppContextResume = ({children}) => {
    return useContext(AppContextData)
}