import React from 'react';
import {
    Nav, NavItem, NavLink, TabContent, TabPane
} from 'reactstrap';
import classnames from 'classnames';
import AddSubject from './AddSubject';
import SearchSubject from './SearchSubject';
import '../components.css';

class Subject extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1' // tab1 is active initially
        };
      }
    toggle(tab){
        if(this.state.activeTab !== tab){
            this.setState({
                activeTab : tab
            })
        }
    }
    render(){
        return(
            <div className="div-container">
                <div className="inner-div">
                    <Nav tabs>
                        <NavItem>
                            <NavLink className = {classnames({active : this.state.activeTab==='1'})}
                            onClick={()=>{this.toggle('1');}} >Search for Subjects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({active : this.state.activeTab==='2'})}
                        onClick={()=>{this.toggle('2')}} >Add Subject</NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <SearchSubject />
                        </TabPane>
                        <TabPane tabId="2">
                           <AddSubject />
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        )
    }
}

export default Subject;