import * as React from 'react';
import {connect, Provider} from 'react-redux';
import {history, store} from './store/store';
import {render} from 'react-dom';
import {mapStateToProps} from './containers/RootContainer/mapStateToProps';
import {RootContainer} from './containers/RootContainer/RootContainer';
import {Router} from 'react-router-dom';

const RootApp = connect(mapStateToProps)(RootContainer);
// const AppWithRouter = withRouter(connectedApp);

render(
    <Provider store={store}>

        <Router history={history}>
            <RootApp/>
        </Router>

    </Provider>,
    document.getElementById('root'),
);
