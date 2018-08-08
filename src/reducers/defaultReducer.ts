import {ICommonState} from '../interfaces/ICommonState';
import {AnyAction} from 'redux';

export const defaultReducer = (state: ICommonState, action: AnyAction): ICommonState => state;
