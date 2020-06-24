import React from 'react'

const Hello = () => {
    // With JSX
    // return(
    //     <div className='dummyClass'>
    //         <h1>Hello Sulbhaa!</h1>
    //     </div>
    // )

    // without JSX
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement(
            'h1', 
            null, 
            'Hello Sulbhaa'
        )
    )
}

export default Hello