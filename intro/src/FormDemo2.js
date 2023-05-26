import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import alertify from 'alertifyjs';

export default class FormDemo2 extends Component {
    state = { email: "", password: "", city: "", description: "" }
        handleChange = event => {
            let name = event.target.name;
            let value = event.target.value;

            this.setState({ [name]: value });
        }
        handleSubmit = event => {
            event.preventDefault();
            alertify.success(this.state.email + " email to db!");
            alertify.success(this.state.password + " password to db!");
            alertify.success(this.state.description + " description to db!");
            alertify.success(this.state.city + " city to db!");

        }
    render() {       
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder='Enter E-Mail Address' onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder='Enter Password' onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder='Enter Description' onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" id="city" onChange={this.handleChange}>
                            <option>İstanbul</option>
                            <option>Ankara</option>
                            <option>İzmir</option>
                            <option>Bitlis</option>
                            <option>Kastamonu</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                    
                    

                </Form>


            </div>
        );
    }
}
