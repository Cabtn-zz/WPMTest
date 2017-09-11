import React, { Component } from 'react';
import "./Text.css"
//Needs more styling
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
            //need to use this state to end the game and display score
            end: false,
        }       
    }
    compareKeyPress (e, str){
        //Need to look into passing state into time out function
        if(e === str[0]){
            setTimeout(function()
            {
                alert(`TIMES UP!`); 
            }, 5000)
        }
        if(e === str[this.state.count]){
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
