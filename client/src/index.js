import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Subject from './components/subject/Subject';
import * as serviceWorker from './serviceWorker';

const routing = (
		<Router>
			<div>
				<Route path="/" component={App} /> {/*this path is not exact so that App is always rendered*/}
				<Route path="/subject" exact component={Subject} />
				{/* <Route path="/course" exact component={Course} />
				<Route path="/topic" exact component={Topic} /> */}
			</div>
		</Router>
	);
ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();