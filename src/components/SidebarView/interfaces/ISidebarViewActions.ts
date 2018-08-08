export interface ISidebarViewActions {
    requestRepoInfoAction (repoName: string): void;

    fetchReposAction (organisationId: string): void;
}
