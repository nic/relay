import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

const UserVisitCard = ({User}) =>
  <div className="Box Box-border">
    <strong>Cartão de visita</strong>
    <br/>
    Nome: {User.name}<br/>
    GitHub: {User.github}
  </div>;


export default createFragmentContainer(UserVisitCard, graphql`
    fragment UserVisitCard_User on User {
        name
        github
    }
`);
