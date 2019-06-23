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
    )
  }
}

export default AppNavbar;