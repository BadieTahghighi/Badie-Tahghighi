import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Main from './layouts/Main';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Main exact path={`/about`} component={About} />
          <Main exact path={`/blog`} component={Blog} />
          <Main exact path={`/contact`} component={Contact} />
          <Main exact path={`/`} component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
