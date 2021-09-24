// import React from 'react'
import Button from "./Button";

export default function Footer() {
    
    const date=new Date();
    const button_visible=true;

    

    return (
        
        
        <div>
           <p>Copyright copy &copy; {date.getFullYear()}</p>
       
       {/* {button_visible?<Button/>:null}ose */}
{button_visible && <Button/>}

        </div>
    )
}
