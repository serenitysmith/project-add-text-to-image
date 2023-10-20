import React from "react"
import troll from "./troll.png"
export default function Header() {
    return (
        <header className="header">
            <img src={troll} alt='fff' className='troll'></img>
            <h2 className="header--title">Meme Generator</h2>
            
        </header>
    )
}