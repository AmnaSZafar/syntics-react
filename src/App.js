import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Seminar from './pages/Seminar';
import Apply from './pages/Apply';
// import Login from './pages/Login';
// import Register from './pages/Register';

function App() {
  return (
    <div>

      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/apply' component={Apply} />
          <Route exact path='/seminar' component={Seminar} />
         
        </Switch>

        <Footer />

      </Router>

    </div>
    
  );
}

export default App;
