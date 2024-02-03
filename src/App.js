import logo from "./logo.svg";
import "./App.css";
import My_Nav from "./components/My_nav";
import Section_1 from "./components/Section_1";
import Marca from "./components/Marca";
import Slots from "./components/Slots";
import Jackpot from "./components/Jackpot";
import Casino from "./components/Casino";
import Mas from "./components/Mas";
import Ofertas from "./components/Ofertas";
import Eloss from "./components/Eloss";
import Lanza from "./components/Lanza";
import My_footer from "./components/My_footer";
import Accordion_Faq from "./components/Accordion_Faq";
import Backtotop from "./components/Backtotop";

function App() {
  return (
    <div className="App">
      <My_Nav />
      <Backtotop/>
      <Section_1 />
      <Marca />
      {/* <Slots /> */}
      <Jackpot />
      <Casino />
      <Mas />
      <Ofertas />
      <Eloss/>
      <Accordion_Faq/>
      <Lanza/>
      <My_footer/>
    </div>
  );
}

export default App;
