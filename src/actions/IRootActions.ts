export interface IRootActions {
    requestRepoInfoAction (repoName: string): void;
}

export enum RootActions {
    ReposRequested = 'RootActions.ReposRequested',
    ReposFulfilled = 'RootActions.ReposFulfilled',

    OrganisationInfoRequested = 'RootActions.OrganisationInfoRequested',
    OrganisationInfoFulfilled = 'RootActions.OrganisationInfoFulfilled',

    RepoInfoRequested = 'RootActions.RepoInfoRequested',
    RepoInfoFulfilled = 'RootActions.RepoInfoFulfilled',

    RepoContributorsRequested = 'RootActions.RepoContributorsRequested',
    RepoContributorsFulfilled = 'RootActions.RepoContributorsFulfilled'
}
