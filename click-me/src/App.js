import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {

  const [score,setScore] = useState(0)
  const [isGameOver,setIsGameOver]=useState(false) 
  const [style1 ,setStyle1] = useState({
    position:"absolute",
    top: "10px",
    left : "1366px",
    width:"80px",
    borderRadius:"50%"
  })

  const [style2 ,setStyle2] = useState({
    position:"absolute",
    top: "10px",
    left : "100px",
    width:"80px",
    borderRadius:"50%"
  })


  const updateScore = ()=>{
    setScore((prevScore)=>prevScore+1);
    setStyle1(prevState=>({...prevState,top:Math.floor(Math.random() * 800) , left:Math.floor(Math.random() * 1301)}))
    setStyle2(prevState=>({...prevState,top:Math.floor(Math.random() * 800) , left:Math.floor(Math.random() * 1301)}))
  }

  const gameOver = () => {
    setIsGameOver(true);
  }


  const restart = ()=>{
    setScore(0)
    setIsGameOver(false)
    setStyle1(prevState=>({...prevState,top:Math.floor(Math.random() * 800) , left:Math.floor(Math.random() * 1301)}))
    setStyle2(prevState=>({...prevState,top:Math.floor(Math.random() * 800) , left:Math.floor(Math.random() * 1301)}))
  }

  return (
    <>
    {/* <h1>score : {score}</h1> */}
      {!isGameOver ?  <Button variant="primary" style={style1} onClick={()=>updateScore()}>Click me !!!</Button> : null}
      {!isGameOver ? <Button variant="primary"style={style2} onClick={()=>gameOver()}>Click me !!!</Button> : null }   
      {isGameOver ? <Button variant="success"style={{
    position:"absolute",
    top: "50%",
    left : "50%",
    borderRadius:"50%"
  }} onClick={()=>restart()}>Restart</Button> : null }
     {isGameOver ?  <h1>Game Over. Score is : {score}</h1> : null}
    </>
    
  );
}

export default App;
