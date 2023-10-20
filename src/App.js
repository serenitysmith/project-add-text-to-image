import React from "react"
import Header from "./Header"
import Meme from "./Meme"
import "./App.css"
/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}


export default App;
