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
        this.state.text.length > 0 ? this.props.alert("Text Changed to LowerCase", "success") : this.props.alert("Enter something", "Error")
        document.title="Text Changed to LowerCase"

    }
    changeToUppercase() {
        let txt = this.state.text.toUpperCase();
        this.setState({
            text: txt
        })
        this.state.text.length > 0 ? this.props.alert("Text Changed to UpperCase", "success") : this.props.alert("Enter something", "Error")
        document.title="Text Changed to UpperCase"

    }
       
    word =()=>{
        let arr= this.state.text.split(/\s+/)// this will return array splitting on the basis of each space
       arr= arr.filter(elem=>elem !=="").length  // this will check whether the above returned arry elem != " " , hence give the arr
        return arr
    }
 
    
    render() {
        return (
            <>
            <hr></hr>
                <h1>Textform</h1>
                <div class="mb-3">
                    <textarea className="form-control" value={this.state.text} onChange={this.textChange} id="exampleFormControlTextarea1" rows="6" placeholder='Enter Text' style={{color: this.props.mode==="light"? "black":"white",backgroundColor : this.props.mode==="light"? "white":"#45856f"}} ></textarea>
                    <button disabled={this.state.text.length===0}  className='btn btn-primary my-3 mx-3' type='button' onClick={this.changeToUppercase}>To UpperCase</button>
                    <button disabled={this.state.text.length===0} className='btn btn-primary my-3 mx-3' type='button' onClick={this.changeToLowercase}>To LowerCase</button>
                    
                </div>
                <div>
                    <h2>Text Summary </h2>
                    <p> {this.word()} Words, {this.state.text.length} Characters</p>
                    <h2>Preview</h2>
                    <p> {this.state.text.length>0?this.state.text:"Enter something to preview text"} </p>
                </div>
                
            </>
        )
    }
}


export default TextForm2