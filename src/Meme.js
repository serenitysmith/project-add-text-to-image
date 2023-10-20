import React from "react";
import memesData from "./memesData";

export default function Meme() {
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const {name, value} = event.target
    // call set meme and access the previous meme, use curly braces surrounded wiht paranthes as an implict object return 
    setMeme(prevMeme =>({
       // this copies all the properties of the previous meme
       ...prevMeme,
// this changes the top and bottom text depending on what name gets pulled in from the target
[name] : value

    }))
}
  return (
    <main>
      <div className="inputs">
        <input
          // added a name property to each input so we can watch for changes

          name="topText"
          type="text"
          placeholder="Top text"
          className="Shutup"
          /// added values so they can be controlled coomponents
          value={meme.topText}
          // added a handle change ND  hNDLE CHANGE FUNCTION ABOVE 
          onChange={handleChange}
        />
        <input
        /// added values so they can be controlled compoentents
          name="bottomText"
          type="text"
          placeholder="Bottom text"
          className="take-my"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="img-buttton" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--button" alt="" />

        {/* changed the hard code4d h2s to pull in our object values in state wiht meme.topTextand meme.bottom */}
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}


// dstill pulling from locsal js file when we need to pull form API