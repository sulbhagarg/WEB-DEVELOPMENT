import React from 'react'

// function Greet() {
//     return <h1>Hello Sulbha</h1>
// }

// ES6 syntax
const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name}! Your love is {props.love}</h1>
            {props.children}
        </div>
    )
}

// importing it as name Greet is compulsion!
// export const Greet = () => <h1>Hello Sulbha</h1>

// This allows to import from anyname!!
export default Greet