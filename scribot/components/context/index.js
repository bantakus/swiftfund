import {createContext, useState} from 'react';


export const AppContext = createContext();


function Context({children}){

    const [user,setUser] = useState({});

    return (
        <AppContext.Provider value={{user,setUser}}>
            {children}
        </AppContext.Provider>
    );

}
export default Context;