import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import Customize from './components/Customize';
import Settings from './components/Settings';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        fields: {
          links: {
            merge(existing = [], incoming) {
              return incoming;
            }
          }
        }
      }
    }
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='customize' element={<Customize />} />
              <Route path='settings' element={<Settings />} />
            </Route>
            <Route path='/:username' element={<Profile />} />
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
