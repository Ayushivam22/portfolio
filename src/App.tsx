import Certificates from "./Certificates";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./Projects";

function App() {
  return (
    <>
      <Header />
    <div className="App  w-full px-2 md:px-24">
      <Hero />
      <Certificates/>
      <Projects/>
    </div>
    <div className="h-[1000px] bg-pink-200"></div>
    </>
  );
}

export default App;
