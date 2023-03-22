import React from "react";

import "../Modal/modal.sass"

interface Props{
    children: React.ReactNode
}

function Modal({children}: Props){

    const Closemodal = (e: React.MouseEvent): void =>{
        const modal = document.querySelector('#modal')
        modal!.classList.add('hide')
    }

    return(
        <div id="modal" className="hide">
            <div className="fade" onClick={Closemodal}></div>
            <div className="modal">
                <h2>Texto Modal</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal