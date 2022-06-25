import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom";
import { client } from './lib/apollo';
import { Router } from "./Router"

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename="/event-platform-react">
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
