import {IServerAction} from 'src/interfaces/IServerAction';

export const saveReposDataReducer = (state: any, action: IServerAction<any>): any => {
    return {
        ...state,
        repos: action.payload
    };
};
