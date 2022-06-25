import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom";
import { client } from './lib/apollo';
import { Router } from "./Router"

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename="/ignite-lab-event-platform">
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
