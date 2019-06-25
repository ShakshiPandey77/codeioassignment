import React from 'react';
import { Card, CardDeck, CardHeader, CardBody, CardText, Button } from 'reactstrap';

export default function Home(){
	return(
			<CardDeck className='jumbotron'>
			  <Card body inverse style={{backgroundImage :  'linear-gradient(90deg, #ff99cc 0%, coral 100%)', opacity : '0.8'}}>
				<CardHeader>Courses</CardHeader>
				<CardBody>
				  <CardText>About All Courses</CardText>
				  <Button>All Courses</Button>{'\t'}
				  <Button>Add Course</Button>
				</CardBody>
			  </Card>
			  <Card body inverse style={{backgroundImage : 'linear-gradient(90deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)', opacity : '0.8'}}>
				<CardHeader>Subjects</CardHeader>
				<CardBody>
				  <CardText>About All Subjects, which also includes Courses and Topics</CardText>
				  <Button>All Subjects</Button>{'\t'}
				  <Button>Add Subject</Button>
				</CardBody>
			  </Card>
			  <Card body inverse style={{backgroundImage : 'linear-gradient(90deg, #ff99cc 0%, coral 100%)', opacity : '0.8'}}>
				<CardHeader>Topics</CardHeader>
				<CardBody>
				  <CardText>About All Topics</CardText>
				  <Button>All Topics</Button>{'\t'}
				  <Button>Add Topic</Button>
				</CardBody>
			  </Card>
			</CardDeck>	
	)
}