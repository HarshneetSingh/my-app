import React, { Component } from 'react'

export class navbar2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',

        }
        this.changeToUppercase = this.changeToUppercase.bind(this)
        this.textChange = this.textChange.bind(this)

    }

    textChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    changeToUppercase() {
        let txt = this.state.text.toUpperCase();
        console.log(this.state.text.toUpperCase())
        this.setState({
            text: txt
        })


    }
    render() {
        return (
            <>
                <h1>Textform</h1>

                <div class="mb-3">
                    <textarea className="form-control" value={this.state.text} onChange={this.textChange} id="exampleFormControlTextarea1" rows="6" placeholder='Enter Text'></textarea>
                    <button className='btn btn-primary my-3' type='button' onClick={this.changeToUppercase}>To UpperCase</button>
                </div>
            </>
        )
    }
}

export default navbar2