import {Config} from '../config';
import * as parseLinkHeader from 'parse-link-header';
import {IRepoInfo} from '../interfaces/IRepoInfo';

export const getOrganisationInfo = async (organisationId: string) => {
    return fetch(`${Config.BasePath}/orgs/${organisationId}`)
        .then((resp) => resp.json());
};

export const getOrganisationRepos = async (organisationId: string) => {
    let reposList: IRepoInfo[] = [];

    const promises: Array<Promise<any>> = [];
    let currentPage = 1;
    const {repos, lastPage} = await getReposPage(organisationId, currentPage);

    reposList = reposList.concat(repos)

    while (currentPage++ < lastPage) {
        promises.push(getReposPage(organisationId, currentPage));
    }
    const results = await Promise.all(promises);

    results.forEach((res: { repos: IRepoInfo[], lastPage: number }) => {
        reposList = reposList.concat(res.repos);
    });

    return reposList;
};

const getReposPage = async (organisationId: string, pageNumber: number): Promise<{ repos: IRepoInfo[], lastPage: number }> => {

    return fetch(`${Config.BasePath}/orgs/${organisationId}/repos?page=${pageNumber}&per_page=100`)
        .then((resp: Response) => {
            const linkString = resp.headers.get('Link') || '';
            const parsed = parseLinkHeader(linkString)!;

            const lastPage = (parsed.last && Number(parsed.last.page)) || 0;

            return Promise.all([resp.json(), Promise.resolve(lastPage)]);
        })
        .then((resp) => {
            return {repos: resp[0], lastPage: resp[1]};
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
