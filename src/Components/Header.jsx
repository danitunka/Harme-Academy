import '../style/Header.css';
import logo from '../images/logo 1.png';


import { useState } from 'react';
const Header = (props)=>{
   const [toggleClicked, setToggleClicked] = useState(false);
   const [isClicked, setIsClicked] = useState(1);
   const activeTab = (event) =>{
    // event.preventDefault();
   setIsClicked(event);
   props.number(event);
  }
  const showMenu = ()=>{
    !toggleClicked ? setToggleClicked(true):setToggleClicked(false);
  }
  const handleClick = (index)=>
   { activeTab(index),
    showMenu()
  }
  


    return (
        <div className='header'>
          <div className='logo'>
            <img src = {logo} alt = "Logo image"></img>
          </div>
          <button onClick = {showMenu} className={toggleClicked? 'nav-toggle active':'nav-toggle'} >
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </button>
          {/* <div ref = {navRef} className='Nav-bar'> */}
        <div className={toggleClicked?  'Nav-bar active':'Nav-bar'}>
        <div className={`items ${isClicked === 1 ? 'active': ''}`} onClick ={()=> handleClick(1)}>Home</div>
        <div className= {`items ${isClicked === 2? 'active': ''}`} onClick ={()=> handleClick(2)}> About Us</div>
        <div className={`items ${isClicked === 3 ? 'active': ''}`} onClick ={()=> handleClick(3)}>School</div>
        <div className={`items ${isClicked === 4 ? 'active': ''}`} onClick ={()=> handleClick(4)}>Registration</div>
        <div className={`items ${isClicked === 5 ? 'active': ''}`} onClick ={()=> handleClick(5)}>Programs</div>
        <div className={`items ${isClicked === 6 ? 'active': ''}`} onClick ={()=> handleClick(6)}>Support</div>
         
       </div>
       
      </div>
    );
}
export default Header;
