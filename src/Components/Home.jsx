import '../style/Home.css';
import image from '../images/home-child.png';
const Home = ()=>{
    return (
    <div className ='home'>
          
          <h2>Welcome To <span>Ha</span>rme Ho<span>pe</span> Academy</h2>
          {/* <div className='texts'> */}
          <h3> "Nurturing little hearts,
           Shaping bright Futures
          Where every child's journey 
            Begins with love and hope."</h3>
          {/* </div> */}
          <div className='image'><img src = {image} ></img></div>
    </div>
    );
}
export default Home;
// import { useState, useEffect } from 'react';
// import './Home.css';
// import image from '../images/child.png';

// const Home = () => {
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };

//         window.addEventListener('resize', handleResize);

//         // Cleanup
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <div className='home'>
//             <h2>
//                 Welcome To <span>Ha</span>rme Ho<span>pe</span> Academy
//             </h2>
//             <div className={isMobile ? 'texts mobile' : 'texts'}>
//                 <h3>
//                     "Nurturing little hearts,  <br/>
//                     Shaping bright Futures <br/>
//                     Where every child's journey <br/>
//                     Begins with love and hope."
//                 </h3>
//             </div>
//             <img src={image} alt="Child" />
//         </div>
//     );
// };

// export default Home;
