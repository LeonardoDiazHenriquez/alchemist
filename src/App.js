import logo from './logo.svg';
import './App.css';

function App() {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U','V','W','X','Y','Z'];

  return (
    <div className="app">
      <div id="workspace">
        <div id="left"></div>
        <div id="center">
            <ul>
              {
                alphabet.map(letter => (<li>{letter}</li>)) 
              }
            </ul>
        </div>
        <div id="right">
          <div className="element">
            <div className="img"><img src="assets/air.jpg" /></div>
            <div className="text">air</div>
          </div>
          <div className="element">
          <div className="img"><img src="assets/earth.jpg" /></div>
            <div className="text">earth</div>
          </div>
          <div className="element">
          <div className="img"><img src="assets/fire.jpg" /></div>
            <div className="text">fire</div>
          </div>
          <div className="element">
          <div className="img"><img src="assets/water.jpg" /></div>
            <div className="text">water</div>
          </div>
        
        </div>
      </div>
    </div>

  );
}

export default App;
