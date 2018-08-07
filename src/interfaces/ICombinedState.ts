import {RouterState} from 'react-router-redux';

export interface ICombinedState {
    readonly common: any;
    readonly router: RouterState;
}
