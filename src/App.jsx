import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import FindMatch from './components/FindMatch';
import RegisterTeam from './components/RegisterTeam';
import Footer from './components/Footer';
import Header from "./components/Header";
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <FindMatch/>
        <RegisterTeam/>
        <Footer/>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

