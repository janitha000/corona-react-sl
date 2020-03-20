import React, { useReducer, createContext } from 'react'

const initialState = {};
const store = createContext(initialState)
const { Provider } = store;

const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case 'COUNTY_SEARCH':
                return { ...state, countrySearch : action.payload.countrySearch}
            default:
                return state;
        }
    }, initialState)

    return <Provider value={{state, dispatch}}>{children}</Provider>
}

export {store, StateProvider}