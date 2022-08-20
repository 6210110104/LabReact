import React, {useState} from "react";
import _, { attempt } from 'lodash';

import CharacterCard from "./CharacterClass";

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false,
        text: ""
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    
    const activationHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }
    return (
        <div>
            {
                state.chars.map((c, i) => 
                    <CharacterCard value = {c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)
            }
        </div>
    )

function setText(textWord) {
    const activeText = c => {
    let text = state.text + c
    setState({...state, text})

    if(text.length == state.word.length){
        if(text == state.word){
            console.log('yeah!')
            setState({...state, completed: true})
        }else{
            console.log('reset, next attempt')
            setState({...state, text: '', attempt: state.attempt + 1})
        }
    }
}
return (
    <div>
        {
            state.chars.map((c, i) => 
                <CharacterCard value = {c} key={i} activeText={activeText} attempt={state.attempt}/>)
        }
    </div>
)
}
    
}