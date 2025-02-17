import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoogleLogin from './components/Auth/GoogleLogin';
import PrivateRoute from './components/Auth/PrivateRoute';
import PitForm from './components/Forms/PitForm';
import TrackerForm from './components/Forms/TrackerForm';
import DragDrop from './components/FormBuilder/DragDrop';
import CompareView from './components/Compare/CompareView';
import './styles/theme.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={GoogleLogin} />
        <PrivateRoute path="/pit-form" component={PitForm} />
        <PrivateRoute path="/tracker-form" component={TrackerForm} />
        <PrivateRoute path="/form-builder" component={DragDrop} />
        <PrivateRoute path="/compare" component={CompareView} />
        <Route path="/" exact>
          <h1>Welcome to FTC Super Alliance</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;