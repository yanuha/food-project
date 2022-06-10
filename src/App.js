import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Category } from './pages/Category';
import { Meal } from './pages/Meal';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Router basename='/food-project'>
        <Header />
        <main className='container content'>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about' component={About} />
            <Route path='/contacts' component={Contact} />
            <Route path='/category/:name' component={Category} />
            <Route path='/meal/:id' component={Meal} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
