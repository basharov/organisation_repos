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
    AccessToken: process.env.GITHUB_ACCESS_TOKEN!
};
