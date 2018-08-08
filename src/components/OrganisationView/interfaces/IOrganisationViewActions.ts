export interface IOrganisationViewActions {
    requestRepoInfoAction (repoName: string): void;

    requestOrganisationInfoAction (organisationId: string): void;

    pushRouteToOrganisationPage (organisationId: string): void;
}
