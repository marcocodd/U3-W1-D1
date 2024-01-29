import logo from './logo.svg';
import './App.css';
import ButtonComponent from "./buttonComponent";
import ClassImgComponent from "./ClassImgComponent";
function App() {
 return (
  <div className="App">
   <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
     Edit <code>src/App.js</code> and save to reload.
    </p>
    <ButtonComponent text="Hello test Button" />
    <ClassImgComponent
     url="http://placekitten.com/200/300"
     desc="kitten image"
    />
   </header>
  </div>
 );
}

export default App;
