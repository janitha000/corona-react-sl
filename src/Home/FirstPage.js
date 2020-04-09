import React from 'react'
import { Image , Jumbotron, Container} from 'react-bootstrap'
import nature from './nature.jpeg'


const FirstPage = () => {
    return (
        <div>
           <div style={{textAlign: "center"}}>
               <h1>My-Site</h1>
           </div>
            {/* <img style={{ maxWidth: "300vh", marginRight: "150px", marginRigh: "150px"}} src={nature} /> */}
        </div>
    )
}

export default FirstPage