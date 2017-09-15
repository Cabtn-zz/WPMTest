import React, { Component } from 'react';
import "./Text.css"
export default class TextComponent extends Component {

    blob = "He is here... Obi-Wan Kenobi! What makes you think so? A tremor in the Force.  " + 
    "The last time I felt it was in the presence of my old master. Surely he must be dead by now. " +
    "Don't underestimate the power of the Force. The Jedi are extinct, their fire has gone out of the universe.." +
    "You, my friend, are all that's left of their religion. Yes. Governor Tarkin, we have an emergency alert in detention block A A-twenty-three." +
    "The princess! Put all sections on alert!";

    words = this.blob.split(' ');

    constructor(props){
        super(props);
        this.state = {
            currentInput: "",
            count: 0,
            matches: 0,
            wordsCompleted: 0,
            curWord: "",
            end: false,
        }       
    }
    compareKeyPress (e, str){
        //Need to look into passing state into time out function
        if(e === str[0]){
            setTimeout(function(){
                alert(`TIMES UP!`); 
            }, 5000)
        }
        if(e === str[this.state.count]){
            let current = this.state.curWord + e;
            if(e === " " && this.state.curWord === this.words[0]){
                const wpm = this.state.wordsCompleted + 1
                this.words.splice(0,1);
                current = ""
                this.setState({
                    wordsCompleted: wpm,
                    curWord: current,
                })
            }
            //Need to fix the way matches are registered
            const count = this.state.count + 1
            this.setState({ 
                currentInput: "",
                count: count,
                matches: this.state.matches + 1,
                curWord: current,
            })
        }
    }

    backSpace(e){
        if(e === 8){
            const decrement = this.state.count - 1;
            this.setState({
                    count: decrement,
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
                <div className="renderedStats">
                    {this.highlightBlob()}
                    Matches:{" " + this.state.matches}
                    <br/>
                    Words Completed: {" " + this.state.wordsCompleted}
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
