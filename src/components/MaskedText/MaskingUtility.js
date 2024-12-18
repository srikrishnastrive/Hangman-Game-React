

export function getMaskedString(text,usedLetters){
    usedLetters = usedLetters.map(letter => letter.toUpperCase());//['h','m','e'] --> ['H','M','E']

    const usedLettersSet = new Set(usedLetters);
   

    const result = text.toUpperCase().split('').map((char) =>{
        if (usedLettersSet.has(char)){
            return char;
        }
        else {
            return '_';
        }
    });
    return result.join('');
    //['H', '_','M','_','_','E'] this is array form
    // return result.join('') // "H_M__E" it removes the array
}
