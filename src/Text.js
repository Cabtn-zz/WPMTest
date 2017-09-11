import React, { Component } from 'react';
import "./Text.css"

export default class TextComponent extends Component {

    blob = "And what of the Rebellion? If the Rebels have obtained a complete technical " + 
    "readout of this station, it is possible, however unlikely, that they might " +
    "find a weakness and exploit it.";

    constructor(props){
        super(props);
        this.state = {
            currentInput: "",
            count: 0,
            matches: 0,
            end: false,
        }       
    }
    compareKeyPress (e, str){
        console.log(e)
        if(e === str[0]){
            setTimeout(function()
            {
                alert(`TIMES UP!`); 
            }, 5000)
        }
        if(e === str[this.state.count]){
            console.log("MATCH")
            const count = this.state.count + 1
            this.setState(
            { 
                currentInput: "",
                count: count,
                matches: this.state.matches + 1
            })
        }
    }

    backSpace(e){
        console.log(e);
        if(e === 8){
            const count = this.state.count - 1;
            this.setState(
                {
                    count: count,
                }
            )
        }
    }

    highlightBlob(){
        let str = this.blob.substr(0, this.state.count);
        let backHalf = this.blob.substr(this.state.count);
        console.log("WELL",str);
        console.log("END", backHalf);
        return (
         <div>
            <span className="highliteGreen"> {str} </span>
            <span className="highliteYellow"> {backHalf} </span>
        </div>
            )
    }
    render() {
        return (
            <div>
                <div>
                    {this.highlightBlob()}
                    Matches:{" " + this.state.matches}
                </div>
                <input 
                type='text' 
                placeholder="Start typing" 
                onChange={ (e) => this.compareKeyPress(e.target.value, this.blob) }
                onKeyDown={ (e) => this.backSpace(e.keyCode)} 
                value = { this.state.currentInput }>
                </input>
            </div>
        )
    }
}
