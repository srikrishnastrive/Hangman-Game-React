import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import { Routes,Route } from "react-router-dom";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";


function App() {
  return (
    <Routes>
      <Route path="/start" element = {<StartGame/>}/>
      <Route path="/play" element = {<PlayGame/>}/>
      <Route path="/" element = {<div>home</div>} />
    </Routes>
  );
}

export default App;
