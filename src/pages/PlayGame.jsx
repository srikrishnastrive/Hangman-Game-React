import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/Letters/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";

function PlayGame() {
    const { state } = useLocation();
    const [guessedLetters,setGuessedLetters] = useState([]);
    const [step,setStep] = useState(0);

    function handleLetterClick(letter){
        if (state.wordSelected.toUpperCase().includes(letter)){
            console.log('correct');
        }
        else {
            console.log('wrong answer');
            setStep(step+1);
        }
        setGuessedLetters([...guessedLetters,letter]);
    }

    return (
        <>
            <h1>Play Game </h1>
            <MaskedText
                text={state.wordSelected}
                usedLetters={guessedLetters} 
            />
           
            <div>
                     <LetterButtons text={state.wordSelected} usedLetters={guessedLetters} onLetterClik={handleLetterClick} />    
            </div>
            <div>
                <HangMan step={step}/>
            </div>
            <Link to="/start" className="text-blue-400">
                Start Game Link
            </Link>
            
        </>
    );
}

export default PlayGame;
