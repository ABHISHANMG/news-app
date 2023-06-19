import React from 'react'

const ReactContext = React.createContext({
    inputSearch : () => {},
    submitForm : () => {}, 
    newsList:[],
})

export default ReactContext 

