import logo from './logo.svg';
import ImageListMycenae from './imageListMycenae';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <ImageListMycenae/>
    </div>
  );
}

export default App;
