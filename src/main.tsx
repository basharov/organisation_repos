import * as React from 'react';
import {connect, Provider} from 'react-redux';
import {history, store} from './store/store';

import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import {render} from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {mapStateToProps} from './containers/RootContainer/mapStateToProps';
import {RootContainer} from './containers/RootContainer/RootContainer';

const connectedApp = connect(mapStateToProps)(RootContainer);
const appWithRouter = withRouter(connectedApp);

render(
    <Provider store={store}>

        <ConnectedRouter history={history}>
            <Route component={appWithRouter}/>
        </ConnectedRouter>

    </Provider>,
    document.getElementById('root'),
);
