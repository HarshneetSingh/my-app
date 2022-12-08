import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Textform(props) {

    const [text, setText] = useState("")
    const navigate = useNavigate();


    // useState(param) = this parameter is the initial value for the text 
    // setText is the FUNCTION that HELPS to RE-set the text

    // IF YOU re set the text with initan variable which is {text} will increase the value but it will not show in dom 
    // as setText will rerender as the dom element, and initial value dont rerender it
    function changeToUppercase() {
        const updatedText = text.toUpperCase();
        setText(updatedText)

        text.length > 0 ? props.alert("Text Changed to UpperCase", "success") : props.alert("Enter something", "Error")
        document.title = "Text Changed to UpperCase"
    }
    function changeToLowercase() {
        const updatedText = text.toLowerCase();
        setText(updatedText)
        text.length > 0 ? props.alert("Text Changed to LowerCase", "success") : props.alert("Enter something", "Error")
        document.title = "Text Changed to LowerCase"

    }
    function textChange(event) {
        setText(event.target.value)
    }
    function word(text) {
        let arr = text.split(" ")// this will return array splitting on the basis of each space
        arr = arr.filter(elem => elem !== "").length  // this will check whether the above returned arry elem != " " , hence give the arr
        return arr
    }


    return (
        <>
            <div>
                <h1>Textform</h1>

                <div class="mb-3" >
                    <textarea className="form-control" value={text} onChange={textChange} id="exampleFormControlTextarea1" rows="6" placeholder='Enter Text' style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#45856f" }}></textarea>
                    <button className='btn btn-primary my-3 mx-3' type='button' onClick={changeToUppercase}>To UpperCase</button>
                    <button className='btn btn-primary my-3 mx-3' type='button' onClick={changeToLowercase}>To LowerCase</button>
                    <button className='btn btn-primary my-3 mx-3' type='button' onClick={() => navigate(-1)}>go back</button>
                    <button className='btn btn-primary my-3 mx-3' type='button' onClick={() => navigate("/byClass")}>To class</button>


                </div>

                <div>
                    <h2>Text Summary</h2>
                    <p> {word(text)} Words, {text.length} Characters</p>
                    <h2>Preview</h2>
                    <p> {text.length > 0 ? text : "Enter something to preview text"}</p>
                </div>
            </div>
        </>
    )

    // onClick does not accept function with () as it will render as soon as dom render so we just pass the refernece of the function 
}

export default Textform