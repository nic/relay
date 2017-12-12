import { Environment, Network, RecordSource, Store } from 'relay-runtime';
// Para habilitar a extensão do Google Chrome:
// import { installRelayDevTools } from 'relay-devtools';
// installRelayDevTools();

function fetchQuery(
  operation,
  variables
) {
  return fetch(
    'https://api.graph.cool/relay/v1/cjb3n7jnp0ir70184sgit9e4v',
    {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    },
  ).then(response => response.json());
}

const environment = new Environment({
  network: Network.create(fetchQuery ),
  store: new Store(new RecordSource()),
});

export default environment;
