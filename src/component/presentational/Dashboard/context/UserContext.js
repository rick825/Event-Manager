import React, {createContext, useContext, useState} from 'react';


const  UserContext = createContext();

export const UserCont = ({ children }) =>{
    const [ UserId, setUserId ] = useState('');


    return (
        <UserContext.Provider value={{UserId ,setUserId}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUserContext = () => useContext(UserContext);