import React, {createContext, useContext, useState} from 'react';


const  UserContext = createContext();

export const UserCont = ({ children }) =>{
    const [ UserId, setUserId ] = useState('');
    const [moreInfo, setMoreInfo ] = useState(false);
    const [ moreInfoId, setMoreInfoId ] = useState();
    const [ profile , setProfile ] = useState(false);


    return (
        <UserContext.Provider value={{UserId ,setUserId, moreInfo, setMoreInfo, moreInfoId, setMoreInfoId, profile , setProfile }}>
            {children}
        </UserContext.Provider>
    )
}


export const useUserContext = () => useContext(UserContext);