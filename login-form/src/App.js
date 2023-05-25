import './App.css';
import AppNavbar from './components/AppNavbar';
import CustomRoute from './routes/CustomRoute';
import { createContext ,useState } from 'react'

export const LoginContext = createContext(null);

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(0);  // 0 = initial state , 1 = logged in , 2 = logged out , 3 = invalid credentials 
  return (
    
     <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
      {isLoggedIn==1 && <AppNavbar/>}
      <CustomRoute/>   
    </LoginContext.Provider>
   
  );
}

export default App;
