import { useState } from "react";

function SlideShow({pics}) {
    console.log(pics.length)
    const [indexPic, setIndexPic] = useState(0)
    
    const decrementImage = () => {
        setIndexPic((indexPic + pics.length - 1) % pics.length)
    }

    const incrementImage = () => {
        setIndexPic((indexPic + 1) % pics.length)
    }
     

 return (
    <div className="slideShow">
        <buton onClick={decrementImage}>Prev</buton>
        <img src={pics[indexPic]} alt="" />
        <button onClick={incrementImage}>Next</button>

    </div>
 )
}

export default SlideShow