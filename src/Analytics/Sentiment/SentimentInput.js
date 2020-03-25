import React , {useContext, useEffect} from 'react'
import FormField from '../../Common/FormField'
import FormArea from '../../Common/FormArea'
import {store} from '../../Store/store'
import Sentiment from './Sentiment';



const SentimentInput = ({ value }) => {
    const globalState = useContext(store);
    const {dispatch} = globalState;

    useEffect(() => {
        console.log('Sentiment input rendered')
    },[])

    const handleOnChange = (data) => {
        console.log(data);
        dispatch({type : 'SENTIMENT_SEARCH', payload : {sentimentSearch : data}})
    }



    return (
        <FormArea lable="Type text here" onChangeParent={handleOnChange} />
        // <FormField type="text" label = 'User Name' onChangeParent={handleOnChange} />
    )
}

export default SentimentInput;