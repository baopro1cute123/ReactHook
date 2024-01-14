import './App.css';
import logo from './logo.svg';
import Nav from './views/Nav';
function App() {
  let name = 'Bảo' ;
  
  const handleEventClick = (event) => {
    console.log("click me!", event)
  }
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color: 'red', fontSize: '40px'}}>Hello My name is {name}</h1>
        <input 
        type='text' 
        onClick={(event)=> handleEventClick(event)}
         />
        <button style={{marginTop: "10px"}} type='button' 
               onClick={(event)=> handleEventClick(event)}
        >Click me!</button>
      
      </header>
    </div>
  );
}

export default App;
