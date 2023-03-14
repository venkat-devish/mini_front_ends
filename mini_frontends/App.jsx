import "./App.css";
import Timer from "./components/Timer/Timer";
// import LetterByLetter from "./components/LetterSearch/LetterByLetter";
// import Boxer from "./components/Boxer/Boxer";

function App() {
  return (
    <div className="App">
      {/* <Boxer /> */}
      {/* <LetterByLetter /> */}
      <Timer duration={1 * 24 * 60 * 60 * 1000} />
    </div>
  );
}

export default App;
