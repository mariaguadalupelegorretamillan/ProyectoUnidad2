import React from "react";
import "./index.css"

const Nav = () => {

    return (
        <nav>
            <div className='options'>
                <a href="/pokemons" className='hover-underline-animation'> Pokemons </a>
                <a href="/info" className='hover-underline-animation'> 190935 </a>
            </div>
        </nav>
    );

};

export default Nav;