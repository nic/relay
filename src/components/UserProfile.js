import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

const UserProfile = ({User}) =>
  <div className="Box Box-border">
    <strong>Perfil</strong>
    <br/>
    Nome: {User.name}
  </div>;


export default createFragmentContainer(UserProfile, graphql`
  fragment UserProfile_User on User {
   name
  }
`);
