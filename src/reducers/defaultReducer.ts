import {IServerAction} from 'src/interfaces/IServerAction';
import {ICommonState} from '../interfaces/ICommonState';

export const defaultReducer = (state: ICommonState, action: IServerAction<any>): any => state;
