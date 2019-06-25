import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import SearchSubject from './components/subject/SearchSubject';
import AddSubject from './components/subject/AddSubject';
import Course from './components/course/Course';
//import AddSubject from './components/course/AddCourse;
import Topic from './components/topic/Topic';
//import Topic from './components/topic/AddTopic';
import Home from './components/home/Home';
import * as serviceWorker from './serviceWorker';

const routing = (
		<Router>
			<div>
				<Route path="/" component={App} /> {/*this path is not exact so that App is always rendered*/}
				<Route path="/home" exact component={Home} />
				<Route path="/searchsubject" exact component={SearchSubject} />
				<Route path="/addsubject" exact component={AddSubject} />
				<Route path="/searchcourse" exact component={Course} />
					{/*<Route path="/addcourse" exact component={AddCourse} />*/}
				<Route path="/searchtopic" exact component={Topic} />
					{/*<Route path="/addtopic" exact component={AddTopic} />*/}
			</div>
		</Router>
	);
ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();