import TypeArea from "./components/TypeArea";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="h-screen bg-stone-700 font-mono">
      <Navbar></Navbar>

      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <TypeArea></TypeArea>
      </div>
    </div>
  );
}

export default App;
