import Certificates from "./components/Certificates";
import Contact from "./components/contact";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
    <div className="flex flex-col App  w-full px-2 md:px-24">
      <Hero />
      <Certificates/>
      <Projects/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
