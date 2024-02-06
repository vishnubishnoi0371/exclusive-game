import "./App.css";
import My_Nav from "./components/My_nav";
import Section_1 from "./components/Section_1";
import Marca from "./components/Marca";
import Jackpot from "./components/Jackpot";
import Casino from "./components/Casino";
import Mas from "./components/Mas";
import Ofertas from "./components/Ofertas";
import Eloss from "./components/Eloss";
import Lanza from "./components/Lanza";
import My_footer from "./components/My_footer";
// import Accordion_Faq from "./components/Accordion_Faq";
import Backtotop from "./components/Backtotop";
import Preload from "./components/Preload";
import Acc from "./components/Acc";

function App() {
  return (
    <div className="App">
      <My_Nav />
      <Backtotop />
      <Preload />
      <Section_1 />
      <Marca />
      <Jackpot />
      <Casino />
      <Mas />
      <Ofertas />
      <Eloss />
      <Acc/>
      {/* <Accordion_Faq /> */}
      <Lanza />
      <My_footer />
    </div>
  );
}

export default App;
