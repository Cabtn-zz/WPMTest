import React, { Component } from 'react';

export default class TextComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentInput: " ",
            letterToCompare: " ",
            listOfWords: [],
        }
        
    }
    
    compareKeyPress (e, props, letters){
        console.log(props)
        this.setState(
            { 
                currentInput: e, 
                letterToCompare: letters[0],
            })
        if(this.state.currentInput === this.state.letterToCompare){
            letters.shift();
            console.log("MATCH")
            this.setState(
            { 
                currentInput: " ",
                letterToCompare: letters[0],
                listOfWords: letters,
            })
            console.log(props)
        }
    }
    render() {
        const blob = "And what of the Rebellion? If the Rebels have obtained a complete technical " + 
        "readout of this station, it is possible, however unlikely, that they might " +
        "find a weakness and exploit it.";

        let listOfWords = blob.split('');
        return (
            <div>
                <ul>
                    {this.state.letterToCompare}
                </ul>
                <input 
                type='text' 
                placeholder="Start typing" 
                onChange={ (e) => this.compareKeyPress(e.target.value, this.state, listOfWords) } 
                value = { this.state.currentInput }>
                </input>
            </div>
        )
    }
}
