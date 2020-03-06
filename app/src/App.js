import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
	return (
		<div className="App">
			<Router>
				<header>
					<ul>
						<li>
							<Link to="/yesterday">Yesterday</Link>
						</li>
            <li>
							<Link to="/">Home</Link>
						</li>
            <li>
							<Link to="/summary">Summary</Link>
						</li>
					</ul>
          <hr></hr>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/yesterday">
            <Yesterday />
          </Route>
          <Route path="/summary">
            <Summary />
          </Route>
        </Switch>

				</header>

        
			</Router>
      
		</div>
	);
}
// zrefactor these components as pages later
function Home(){
  return(<div>
    <h1>Home</h1>
  </div>)
}
function Yesterday(){
  return(<div>
    <h1>Yesterday's notes</h1>
  </div>)
}
function Summary(){
  return(<div>
    <h2>Summary</h2>
  </div>)
}
export default App;
