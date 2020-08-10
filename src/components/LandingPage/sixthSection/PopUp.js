import React from 'react'

export default function PopUp() {
    return (
        <div className="hidden">
        <div className={`send-message-popup`} 
         >
             <button
               className="close-x"
               onClick={this.handleClick}
             >
               &times;
             </button>
           <div
             className={`send-message-model`}
             
           >
             <div className="response-message">
               <p>message</p>
             </div>
           </div>
         </div>
        </div>
    )
}
