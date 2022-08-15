import React, { useLayoutEffect } from 'react';
import '../css/WannaMarryMe.css';

function WannaDateMe() {

    useLayoutEffect(() => {
        replace();
    })

    const replace = () => {
        const noButton = document.getElementById('no');
        noButton.style.left = `${Math.floor(Math.random() * 80)}%`;
        noButton.style.top = `${Math.floor(Math.random() * 90) + 5}%`;
    }

    const gotIt = () => {
        document.querySelector('.app').innerHTML = `
            <h1 class="wanna">love you ❤</h1>
        `;
    }

    return (
        <div className="app">
            <h1 className="wanna">Quer namorar comigo?</h1>
            <button
                className="button"
                id="yes"
                onClick={gotIt}
            >Sim <span className='heart'> ❤ </span>
            </button>
            <button
                className="button"
                id="no"
                onClick={replace}
            >Não
            </button>
        </div>
    )
}

export default WannaDateMe