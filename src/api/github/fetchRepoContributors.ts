import {Config} from '../../config';
import {fetchPagedData} from './utils/fetchPagedData';

export const fetchRepoContributors = async (organisationId: string, repoName: string) => {
    return fetchPagedData(`${Config.BasePath}/repos/${organisationId}/${repoName}/contributors`, `contributors_${organisationId}_${repoName}`);
};
