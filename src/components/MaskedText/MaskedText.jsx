import { getMaskedString } from "./MaskingUtility";


function MaskedText({ text, usedLetters }) {
    const letters = getMaskedString(text, usedLetters).split('');
    return (
        <>
            {letters.map((letter, index) => {
                return (
                    <span key={`letter-${index}`} className="inline-block mx-1 ">{letter}</span>
                )
            })}
        </>
    )
}



export default MaskedText;

// H U M B L E (B and E are Guessed) -> _ _ _ B _ E
