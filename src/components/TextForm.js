import React, { useState } from 'react'
function Textform() {

    const [text, setText] = useState("")
    function changeToUppercase() {
        const updatedText = text.toUpperCase();
        setText(updatedText)
    }

    function textChange(event) {
        setText(event.target.value)
    }
    return (
        <>
            <h1>Textform</h1>

            <div class="mb-3">
                <textarea className="form-control" value={text} onChange={textChange} id="exampleFormControlTextarea1" rows="6" placeholder='Enter Text'></textarea>
                <button className='btn btn-primary my-3' type='button' onClick={changeToUppercase}>To UpperCase</button>
            </div>
        </>
    )
}

export default Textform