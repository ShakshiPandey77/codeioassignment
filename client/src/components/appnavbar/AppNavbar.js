import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Search from '@material-ui/icons/Search';

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
                    <NavLink href="/home">Home</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
					<DropdownToggle nav caret><Search /></DropdownToggle>
					<DropdownMenu right>
					  <DropdownItem href="/searchsubject">By Subject</DropdownItem>
					  <DropdownItem href="/searchcourse">By Course</DropdownItem>
					  <DropdownItem href="/searchtopic">By Topic</DropdownItem>
					</DropdownMenu>
              </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
    )
  }
}

export default AppNavbar;