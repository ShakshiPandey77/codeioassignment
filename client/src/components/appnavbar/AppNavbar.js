import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Subject from '../subject/Subject';

class AppNavbar extends React.Component{
  state={
    isOpen : false  // this is for small screens and hamburger view
  }

  toggle = ()=>{
    this.setState({
      isOpen : !this.state.isOpen
    });
  }

  render(){
    return(
      <Router>
        <div>
          <Navbar color='dark' dark expand='sm'className="mb-5">
            <Container>
              <NavbarBrand href='/'>Subjects and Courses</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar> {/*for each nav link, add a navitem */}
                  <NavItem>
                    <NavLink href="/subject">Subjects</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/course">Courses</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/topic">Topics</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
        <Route path="/subject" exact component={Subject} />
        {/* <Route path="/course" exact component={Course} />
        <Route path="/topic" exact component={Topic} /> */}
      </Router>
    )
  }
}

export default AppNavbar;