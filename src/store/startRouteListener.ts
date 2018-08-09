import {Action, History, Location} from 'history';
import {Store} from 'redux';
import {match, matchPath} from 'react-router';
import {Config} from '../config';
import {RootActions} from '../actions/IRootActions';

enum RoutesEnum {
    Organisation = 'OrganisationRoute',
    Repo = 'RepoRoute',
    Unknown = 'Unknown'
}

export const startRouteListener = (history: History, store: Store) => {


    // Dispatch actions on first run
    dispatchRouteActions(history.location.pathname, store);

    // Dispatch actions on each route change
    history.listen((location: Location, action: Action) => {
        dispatchRouteActions(location.pathname, store);
    });

};

const getCurrentRoute = (pathname: string): { route: RoutesEnum; routeMatch?: match<any> } => {
    let routeMatch;

    routeMatch = matchPath(pathname, {
        path: Config.Routes.Organisation,
        exact: true
    });

    if (routeMatch !== null) {
        return {route: RoutesEnum.Organisation, routeMatch};
    }

    const repoRoute = matchPath(pathname, {
        path: Config.Routes.Repo,
        exact: true
    });

    if (repoRoute !== null) {
        return {route: RoutesEnum.Repo, routeMatch: repoRoute};
    }

    return {route: RoutesEnum.Unknown};
};


const dispatchRouteActions = (pathname: string, store: Store) => {
    const {route, routeMatch} = getCurrentRoute(pathname);

    if (routeMatch !== undefined) {
        dispatchRouteFetch(store, route, routeMatch);
    }
};

const dispatchRouteFetch = (store: Store, route: RoutesEnum, routeMatch: match<any>) => {
    switch (route) {
        case RoutesEnum.Organisation:
            store.dispatch({type: RootActions.OrganisationInfoRequested, payload: routeMatch.params});
            store.dispatch({type: RootActions.ReposRequested, payload: routeMatch.params});
            break;

        case RoutesEnum.Repo:
            store.dispatch({type: RootActions.ReposRequested, payload: routeMatch.params});
            store.dispatch({type: RootActions.RepoInfoRequested, payload: routeMatch.params});
            store.dispatch({type: RootActions.RepoContributorsRequested, payload: routeMatch.params});
            break;
    }
};
