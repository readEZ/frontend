import { ConfigProvider } from 'antd';
import './App.css';
import WorkspaceLayout from './components/private/WorkspaceLayout';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './Route/PrivateRoute';
import { renderRoutes } from './Route/RouteHelpers';


function App() {
  const isAuthenticated = true;
  return (
    // <div className="App">
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          borderRadius: 2,
          // Alias Token
          colorBgContainer: 'white',
        },
      }}
    >
      <Router>
        <Switch>
          {renderRoutes(isAuthenticated)}
          {/* Redirect to a default route if none of the above matches */}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </ConfigProvider>

    // </div>
  );
}

export default App;
