import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap'

export default class 
 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
                <ListGroupItem>
                  C
                </ListGroupItem>
                <ListGroupItem>
                  Asp.NetMVC
                </ListGroupItem>
                <ListGroupItem>
                  Java
                </ListGroupItem>
                <ListGroupItem>
                  React
                </ListGroupItem>
                <ListGroupItem>
                  EntityFramework
                </ListGroupItem>
      </ListGroup>
      </div>
    )
  }
}
