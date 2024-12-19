import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import { Routes,Route } from "react-router-dom";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/playGame";
import Home from "./pages/home";
import { WordContext } from "./context/WordContext";
import { useState } from "react";


function App() {
  const [wordList,setWordList] = useState([]);
  const [word,setWord] = useState([]);
  return (
    <WordContext.Provider value = {{wordList,setWordList,word,setWord}}>
    <Routes>
      <Route path="/start" element = {<StartGame/>}/>
      <Route path="/play" element = {<PlayGame/>}/>
      <Route path="/" element = {<Home/>} />
    </Routes>
    </WordContext.Provider>
  );
}

export default App;
