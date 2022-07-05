import React from "react";
import "./index.css"

const Nav = () => {

    return (
        <nav>
            <div className='button1'>
                <a href="/pokemons" className='hover-underline-animation'> Pokemons </a>
            </div>
            
            <div className='button2'>
                <a href="/info" className='hover-underline-animation'> 190935 </a>
            </div>
        </nav>
    );

};

export default Nav;