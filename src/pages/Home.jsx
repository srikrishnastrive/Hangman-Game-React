import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";


function Home(){

    const [word,setWord] = useState('');

    async function callWords() {
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();

        const getRandomValue = Math.floor(Math.random() * data.length);
        setWord(data[getRandomValue].wordValue);
        // console.log(getRandomValue);
        // console.log(data[getRandomValue].wordValue)
        // console.log(data[getRandomValue].wordHint)
        
    }

    useEffect(() =>{
        callWords();
    },[]);
    return (
        <>
        <Link to="/play" state={{wordSelected :word}}>
            <Button text="Single Player" />
        </Link>
        <Link to="/start">
        <div className="mt-4">
            <Button text="Multi Player" styleType="secondary"/>
        </div>
            
        </Link>
        </>
    )
}


export default Home;
