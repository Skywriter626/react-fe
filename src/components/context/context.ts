import {createContext, Dispatch, SetStateAction} from 'react';

interface IAuth {
    isAuth: boolean,
    setIsAuth: Dispatch<SetStateAction<boolean>>
}

const Context = createContext({} as IAuth);

export default Context;