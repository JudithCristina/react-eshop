
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
