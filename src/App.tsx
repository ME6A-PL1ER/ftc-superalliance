import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PitFormPage from './pages/PitFormPage';
import ReconFormPage from './pages/ReconFormPage';
import FormEditorPage from './pages/FormEditorPage';
import TeamComparisonPage from './pages/TeamComparisonPage';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pit-form" component={PitFormPage} />
                <Route path="/recon-form" component={ReconFormPage} />
                <Route path="/form-editor" component={FormEditorPage} />
                <Route path="/team-comparison" component={TeamComparisonPage} />
            </Switch>
        </Router>
    );
};

export default App;