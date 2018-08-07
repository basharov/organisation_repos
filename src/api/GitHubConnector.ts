import {Config} from '../config';

const parseLinkHeader = require('parse-link-header');

export const getOrganisationInfo = async (organisationId: string) => {
    return fetch(`${Config.BasePath}/orgs/${organisationId}`)
        .then((resp) => resp.json());
};

export const getOrganisationRepos = async (organisationId: string, pageNumber: number) => {
    return fetch(`${Config.BasePath}/orgs/${organisationId}/repos?page=${pageNumber}`)
        .then((resp: Response) => {
            // const linkString = resp.headers.get('Link') || '';
            // const parsed = parseLinkHeader(linkString);
            // console.log(parsed.last.page)
            return resp.json();
        });
};

export const getRepoInfo = async (organisationId: string, repoName: string) => {
    return fetch(`${Config.BasePath}/repos/${organisationId}/${repoName}`)
        .then((resp: Response) => resp.json());
};

export const getRepoContributors = async (organisationId: string, repoName: string) => {
    return fetch(`${Config.BasePath}/repos/${organisationId}/${repoName}/contributors`)
        .then((resp: Response) => resp.json());
};