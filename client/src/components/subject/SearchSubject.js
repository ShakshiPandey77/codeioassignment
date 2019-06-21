import React from 'react';
import {Form, FormGroup, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import Search from '@material-ui/icons/Search';
import '../components.css';

export default class SearchSubject extends React.Component{
    render(){
        return(
            <div className="div-padding">
            <Form>
                <FormGroup>
                    <InputGroup>
                        <Input placeholder="Search by Branch Name or Branch Code" required/>
                        <InputGroupAddon addonType="append"><Button><Search /></Button></InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
            </div>
        )
    }
}