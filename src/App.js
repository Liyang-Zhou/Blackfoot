import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CollectionPage from './page/Collection/collection.component.jsx';
import HomePage from './page/Home/homepage.component.jsx';
// import Header from './components/header/header.component.jsx';
import ContactPage from './page/Contact/contact.component.jsx';
import PronouncePage from './page/Pronounce/pronounce.component.jsx';
import './App.css';
import Topbar from './components/header/Topbar';

function App() {
  const [states, setStates] = React.useState({
    selectedProj: "https://repl.it/@LIYANG911996/Learning-Blackfoot-1?lite=1&outputonly=1",
    clicked: false,
  });

  return (
    <div>
      <BrowserRouter>
      <Topbar />
      <Switch>
        <Route exact path="/" component={() => <HomePage states={states} setStates={setStates} />} />
        <Route exact path="/collection" component={() => <CollectionPage states={states} setStates={setStates}/>} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/pronounce" component={PronouncePage} />
      </Switch>
      </BrowserRouter>

    </div>
  );
}

// <BrowserRouter>
// <Header />
// <Switch>
//   <Route exact path="/" component={() => <HomePage states={states} setStates={setStates} />} />
//   <Route exact path="/collection" component={() => <CollectionPage states={states} setStates={setStates}/>} />
//   <Route path="/contact" component={ContactPage} />
//   <Route path="/pronounce" component={PronouncePage} />
// </Switch>
// </BrowserRouter>

export default App;
