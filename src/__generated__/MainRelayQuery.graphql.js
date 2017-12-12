/**
 * @flow
 * @relayHash db5e3f2d6e01a5784bcb218aa73cfc79
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type MainRelayQueryResponse = {|
  +viewer: {|
    +User: ?{| |};
  |};
|};
*/


/*
query MainRelayQuery(
  $user_id: ID!
) {
  viewer {
    User(id: $user_id) {
      ...UserProfile_User
      ...UserVisitCard_User
      id
    }
    id
  }
}

fragment UserProfile_User on User {
  name
}

fragment UserVisitCard_User on User {
  name
  github
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "user_id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainRelayQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "user_id",
                "type": "ID"
              }
            ],
            "concreteType": "User",
            "name": "User",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "UserProfile_User",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "UserVisitCard_User",
                "args": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "MainRelayQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "user_id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "MainRelayQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "user_id",
                "type": "ID"
              }
            ],
            "concreteType": "User",
            "name": "User",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "github",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query MainRelayQuery(\n  $user_id: ID!\n) {\n  viewer {\n    User(id: $user_id) {\n      ...UserProfile_User\n      ...UserVisitCard_User\n      id\n    }\n    id\n  }\n}\n\nfragment UserProfile_User on User {\n  name\n}\n\nfragment UserVisitCard_User on User {\n  name\n  github\n}\n"
};

module.exports = batch;
