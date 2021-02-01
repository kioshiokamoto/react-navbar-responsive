import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Home from './pages';
import AcercaDe from './pages/acercaDe';
import Contactar from './pages/Contactar';
import IniciarSesion from './pages/IniciarSesion';
import Registrarse from './pages/Registrarse';
import Servicios from './pages/Servicios';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/acerca-de' exact component={AcercaDe}/>
        <Route path='/servicios' exact component={Servicios}/>
        <Route path='/contactar' exact component={Contactar}/>
        <Route path='/registrarse' exact component={Registrarse}/>
        <Route path='/iniciar-sesion' exact component={IniciarSesion}/>
      </Switch>
    </Router>
  );
}

export default App;
