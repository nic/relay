import React from 'react';
import { QueryRenderer, graphql } from "react-relay";
import environment from './Environment';

import UserProfile from 'components/UserProfile'
import UserVisitCard from 'components/UserVisitCard'

const MainRelay = ({viewer}) =>
  <div className="Box Box-container">
    <UserProfile {...viewer}/>
    <UserVisitCard {...viewer}/>
  </div>;

const query = graphql`
    query MainRelayQuery ($user_id:ID!) {
        viewer {
            User(id:$user_id) {
                ...UserProfile_User
                ...UserVisitCard_User
            }
        }
    }
`;

const variables = {
  user_id: 'cjb3neu7x0rle01130wksqy9w'
  // user_id: 'cjb3ng15o2p4301066mw7bfjl'
  // user_id: 'cjb3nge9p0yqq0113vhc9clel'
};

export default () => <QueryRenderer
  environment={environment}
  query={query}
  variables={variables}
  render={
    ({error, props}) => {
      if (error) {
        return (<small>Erro: {error}</small>);
      } else if (props) {
        return (<MainRelay {...props}/>);
      }
      return (<small>Carregando...</small>);
    }
  }
/>;
