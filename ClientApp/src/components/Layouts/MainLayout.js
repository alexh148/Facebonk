import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { FriendsList } from "../FriendsList/FriendsList";
import { NavMenu } from '../NavMenu/NavMenu';


export class MainLayout extends Component {
  static displayName = MainLayout.name;

  render () {
    return (
      <div>
            <NavMenu />
            <FriendsList />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}