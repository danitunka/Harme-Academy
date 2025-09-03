import './App.css'
import  {useState} from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Registration from './Components/Registration';
import Footer from './Components/Footer';
function App() {
  const [barClicked, setBarClicked] = useState('');
  const clickBar = (index)=>{
    setBarClicked(index);
  }
  
  return (
    <div className='App'>
      <Header number = {clickBar}/>
     {(barClicked === ''|| barClicked === 1) &&  <Home />}
     {( barClicked === 2 || barClicked === '') && <AboutUs />}
     { (barClicked === 4 || barClicked === '') && <Registration />}
     <Footer />
      </div>
  )
}

export default App;
