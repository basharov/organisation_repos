import {RouterState} from 'react-router-redux';
import {ICommonState} from './ICommonState';

export interface ICombinedState {
    readonly common: ICommonState;
    readonly router: RouterState;
}
