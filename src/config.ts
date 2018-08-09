export interface IConfig {
    Routes: {
        Organisation: string;
        Repo: string;

        DefaultOrganisation: string;
        Home: string;
    };
    BasePath: string;
    Organisations: { [key: string]: string };
    DefaultOrganisationId: string;
    ResultsPerPage: number;
    AccessToken: string;
}

const DefaultOrganisationId = 'facebook';

export const Config: IConfig = {
    BasePath: 'https://api.github.com',
    Routes: {
        Organisation: '/org/:organisationId',
        Repo: '/org/:organisationId/:repoId',

        DefaultOrganisation: `/org/${DefaultOrganisationId}`,
        Home: '/'
    },
    Organisations: {
        facebook: 'Facebook',
        twitter: 'Twitter',
        airbnb: 'Airbnb',
        uber: 'Uber'
    },
    DefaultOrganisationId,
    ResultsPerPage: 100,
    AccessToken: 'e3301cce6c8b779877c28b593e828ab4b1f6a1e6'
};
