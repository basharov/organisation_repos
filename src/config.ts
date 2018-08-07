export interface IConfig {
    BasePath: string;
    Organisations: { [key: string]: string };
    DefaultOrganisationId: string;
}

export const Config: IConfig = {
    BasePath: 'https://api.github.com',
    Organisations: {
        facebook: 'Facebook',
        twitter: 'Twitter'
    },
    DefaultOrganisationId: 'facebook'
};
