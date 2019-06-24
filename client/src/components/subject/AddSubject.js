import React from 'react';
import { Col, Button, ButtonGroup, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components.css';

export default class AddSubject extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <Form method="post">
          <FormGroup row >
            <Label for="branchName" sm={2}>Name :</Label>
            <Col sm={10}>
              <Input type="text" name="branchname" id="branchName" placeholder="Name of the Branch" required/>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Label for="branchCode" sm={2}>Code :</Label>
            <Col sm={10}>
              <Input type="text" name="branchcode" id="branchCode" placeholder="Enter Branch Code" required/>
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        <div className="div-padding">
            <ButtonGroup>
              <Button>Home Page</Button>
              <Button>Add Course</Button>
            </ButtonGroup>
        </div>
      </div>
    );
  }
}