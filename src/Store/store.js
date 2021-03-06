import React, { useReducer, createContext } from 'react'

const initialState = {};
const store = createContext(initialState)
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'COUNTRY_SEARCH':
                return { ...state, countrySearch: action.payload.countrySearch }
            case 'COUNTRY_DATA_ADD':
                return { ...state, countryData: action.payload.countryData }
            case 'SENTIMENT_SEARCH':
                return { ...state, sentimentSearch: action.payload.sentimentSearch }
            case 'IS_AUTHENTICATED':
                return { ...state, isAuthenticated: action.payload.isAuthenticated }
            case 'ADD_ACCESS_TOKEN':
                return { ...state, accessToken: action.payload.accessToken }
            default:
                return state;
        }
    }, initialState)

    return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }