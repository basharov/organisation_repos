import {UserActionFunction} from 'src/interfaces/UserActionFunction';

export interface IRootActions {
    readonly commonActions: {
        // readonly setCrop: UserActionFunction<SetCropActionPayload>;
        readonly setCrop: UserActionFunction<any>;
    };
}

export enum RootActions {
    ReposRequested = 'RootActions.ReposRequested',
    ReposFulfilled = 'RootActions.ReposFulfilled',

    RepoInfoRequested = 'RootActions.RepoInfoRequested',
    RepoInfoFulfilled = 'RootActions.RepoInfoFulfilled'
}
