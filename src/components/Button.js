import React from 'react'

export default function Button() {
    // const btn_style={
    //     backgroundColor:"red",
    //     margin:"20px"
    // }

    function sayhello(){
        alert("Hello World")
    }
    return (
        <div>
            <button style={{color:"red"}} onClick={sayhello}>Test button</button>
            {/* <button style={btn_style}>Test button</button> */}
        </div>
    )
}
