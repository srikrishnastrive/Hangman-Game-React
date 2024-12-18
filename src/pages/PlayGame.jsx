import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame() {
    const { state } = useLocation();

    return (
        <>
            <h1>Play Game {state?.wordSelected || "N/A"}</h1>
            <MaskedText
                text={state?.wordSelected || ""}
                usedLetters={['H', 'E']} 
            />
            <Link to="/start" className="text-blue-400">
                Start Game Link
            </Link>
        </>
    );
}

export default PlayGame;
