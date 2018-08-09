import {fetchData} from './utils/fetchData';
import {Config} from '../../config';

export const fetchRepoContributors = async (organisationId: string, repoName: string) => {
    return fetchData(`${Config.BasePath}/repos/${organisationId}/${repoName}/contributors?per_page=100`);
};
