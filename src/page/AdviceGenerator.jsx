import React, { useState, useEffect } from 'react';

import Icon from '../assets/icon-dice.svg';
import Divider from '../assets/pattern-divider-desktop.svg';

import '../scss/main.scss';

export function AdviceGenerator() {
    const [advices, setAdvices] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(
                (advices => {
                    setAdvices(advices.slip.advice)
                    setId(advices.slip.id)
                })
            )
    }, []);
    
    function getNewAdvice() {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(
                (advices => {
                    setAdvices(advices.slip.advice)
                    setId(advices.slip.id)
                })
            )
    }
    
    return(
        <>
            <div className='container'>
                <main className='generator'>
                    <p>ADVICE # {id}</p>
                    <h1>"{advices}"</h1>
                    
                    <img src={Divider} alt="Descrição - 2 traços verticais colocados um ao lado do outro." />

                    <button onClick={getNewAdvice}><img src={Icon} alt="Ícone para o botão" /></button>
                </main>
            </div>
            <footer class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="https://github.com/Lara123-pg">Lara Fernanda</a>.
            </footer>
        </>
    );
}