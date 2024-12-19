import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../context/WordContext";


function Home(){

    //const [word,setWord] = useState('');
    const {setWordList,setWord} = useContext(WordContext);

    async function callWords() {
        const response = await fetch("http://localhost:3000/words");
        const data = await response.json();
        setWordList([...data]);

        const getRandomValue = Math.floor(Math.random() * data.length);
        setWord(data[getRandomValue].wordValue);
       
        
    }

    useEffect(() =>{
        callWords();
    },[]);
    return (
        <>
        <Link to="/play" >
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
