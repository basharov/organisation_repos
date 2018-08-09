import {IRepoInfo} from '../../interfaces/IRepoInfo';
import {Config} from '../../config';
import * as parseLinkHeader from 'parse-link-header';
import {CacheService} from '../../services/CacheService';

export const fetchOrganisationRepos = async (organisationId: string) => {
    let reposList: IRepoInfo[] = [];


    const cachedRepos = CacheService.getReposCache(organisationId);
    if (cachedRepos !== undefined) {
        return cachedRepos;
    }

    const promises: Array<Promise<any>> = [];
    let currentPage = 1;
    const {repos, lastPage} = await fetchReposPage(organisationId, currentPage);

    reposList = reposList.concat(repos);

    while (currentPage++ < lastPage) {
        promises.push(fetchReposPage(organisationId, currentPage));
    }
    const results = await Promise.all(promises);

    results.forEach((res: { repos: IRepoInfo[], lastPage: number }) => {
        reposList = reposList.concat(res.repos);
    });


    CacheService.saveReposCache(organisationId, reposList);

    return reposList;
};

const fetchReposPage = async (organisationId: string, pageNumber: number): Promise<{ repos: IRepoInfo[], lastPage: number }> => {

    return fetch(`${Config.BasePath}/orgs/${organisationId}/repos?page=${pageNumber}&per_page=100`)
        .then((resp: Response) => {

            if (resp.status !== 200) {
                return Promise.all([Promise.resolve([]), Promise.resolve(0)]);
            }

            const linkString = resp.headers.get('Link') || '';
            const parsed = parseLinkHeader(linkString)!;

            const lastPage = (parsed.last && Number(parsed.last.page)) || 0;

            return Promise.all([resp.json(), Promise.resolve(lastPage)]);
        })
        .then((resp) => {
            return {repos: resp[0], lastPage: resp[1]};
        });
};
