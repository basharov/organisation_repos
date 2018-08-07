import {ICommonState} from '../interfaces/ICommonState';

export const initialCommonState: ICommonState = {
    organisationId: localStorage.getItem('organisationId') || 'facebook',
    repos: []
};
