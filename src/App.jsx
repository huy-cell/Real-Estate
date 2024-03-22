import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import Company from './components/Company/Company';
import Residen from './components/Residen/Residen';
function App() {
  return (
    <div className="App">
      <div >
          <div className="white-gradient"></div>
          <Header/>
          <Hero/>
      </div>
      <Company/>
      <Residen/>
    </div>
  );
}

export default App;
