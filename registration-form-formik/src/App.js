import './App.css';
import signupImage from '../src/assests/signup.jpg'
import Signup from './component/Signup';

function App() {
  return (
   <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-5'>
          <Signup/>
        </div>
        <div className='col-md-7'>
          <img className='img-fluid w-100 mt-10' src={signupImage} alt=""/>
        </div>
      </div>
   </div>
  );
}

export default App;
