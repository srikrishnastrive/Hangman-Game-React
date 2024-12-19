import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/Letters/LetterButtons";
import { useContext, useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import { WordContext } from "../context/WordContext";

function PlayGame() {
    //const { state } = useLocation();
    const [guessedLetters,setGuessedLetters] = useState([]);
    const [step,setStep] = useState(0);
    const {wordList,word} = useContext(WordContext);
    

    function handleLetterClick(letter){
        if (word.toUpperCase().includes(letter)){
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
            {wordList.map(wordObject => <li key={wordObject.id}>{wordObject.wordValue}</li>)}
            <MaskedText
                text={word}
                usedLetters={guessedLetters} 
            />
           
            <div>
                     <LetterButtons text={word} usedLetters={guessedLetters} onLetterClik={handleLetterClick} />    
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
