import {Config} from '../config';

const parseLinkHeader = require('parse-link-header');

export const getFacebookInfo = async () => {
    return fetch(`${Config.BasePath}/orgs/facebook`)
        .then((resp) => resp.json());
};

export const getFacebookRepos = async (pageNumber: number) => {
    return fetch(`${Config.BasePath}/orgs/facebook/repos?page=${pageNumber}`)
        .then((resp: Response) => {
            // const linkString = resp.headers.get('Link') || '';
            // const parsed = parseLinkHeader(linkString);
            // console.log(parsed.last.page)
            return resp.json();
        });
};

export const getRepoInfo = async (repoName: string) => {
    return fetch(`${Config.BasePath}/repos/facebook/${repoName}`)
        .then((resp: Response) => resp.json());
};
