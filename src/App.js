import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Home from './pages';
import AcercaDe from './pages/acercaDe';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/acerca-de' exact component={AcercaDe}/>
      </Switch>
    </Router>
  );
}

export default App;
