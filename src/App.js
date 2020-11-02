import './App.css';
import Home from './pages/home/Home';
import Services from './pages/ourservices/Services';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" component={Services} />
      </Switch>
    </Router>
  );
}

export default App;
