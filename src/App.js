import "./App.css";
import Header from "./components/Header";
import Organization from "./components/Organization";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-black text-white w-screen min-h-screen m-0 p-0 max-w-screen !overflow-x-hidden">
      <Header />
      <Organization />
      <Skills />
    </div>
  );
};

export default App;
