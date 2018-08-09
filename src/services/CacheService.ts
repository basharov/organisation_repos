import {IRepoInfo} from '../interfaces/IRepoInfo';
import {IOrganisationInfo} from '../interfaces/IOrganisationInfo';

const reposCache: { [key: string]: IRepoInfo[] } = {};
const organisationInfoCache: { [key: string]: IOrganisationInfo } = {};


export const CacheService = {
    saveReposCache: (organisationId: string, repos: IRepoInfo[]) => {
        reposCache[organisationId] = repos;
    },
    getReposCache: (organisationId: string) => {
        return reposCache[organisationId];
    },
    saveOrganisationInfoCache: (organisationId: string, organisationInfo: IOrganisationInfo) => {
        organisationInfoCache[organisationId] = organisationInfo;
    },
    getOrganisationInfoCache: (organisationId: string) => {
        return organisationInfoCache[organisationId];
    }
};
