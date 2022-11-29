import React, { Component } from 'react'

export class TextForm2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",

        }
        this.changeToUppercase = this.changeToUppercase.bind(this)
        this.textChange = this.textChange.bind(this)
        this.changeToLowercase = this.changeToLowercase.bind(this)
        // here you're binding function with this . as normal function does not have this functionality 
    }
    
    textChange(event) {
        this.setState({
            text: event.target.value
        })
        
    }
    changeToLowercase() {
        const updatedText = this.state.text.toLowerCase();
        this.setState({
            text: updatedText
        })
    }
    changeToUppercase() {
        let txt = this.state.text.toUpperCase();
        this.setState({
            text: txt
        })

    }
   
    word =()=>{
        let arr= this.state.text.split(" ")// this will return array splitting on the basis of each space
       arr= arr.filter(elem=>elem !=="").length  // this will check whether the above returned arry elem != " " , hence give the arr
        return arr
    }

    
    render() {
        return (
            <>
                <h1>Textform</h1>

                <div class="mb-3">
                    <textarea className="form-control" value={this.state.text} onChange={this.textChange} id="exampleFormControlTextarea1" rows="6" placeholder='Enter Text'></textarea>
                    <button className='btn btn-primary my-3 mx-3' type='button' onClick={this.changeToUppercase}>To UpperCase</button>
                    <button className='btn btn-primary my-3 mx-3' type='button' onClick={this.changeToLowercase}>To LowerCase</button>
                    
                </div>
                <div>
                    <h2>Text Summary </h2>
                    <p> {this.word()} Words, {this.state.text.length} Characters</p>
                    <h2>Preview</h2>
                    <p> {this.state.text} </p>
                </div>
                
            </>
        )
    }
}

export default TextForm2